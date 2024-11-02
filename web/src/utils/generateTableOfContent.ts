import { INode } from '@/app/Interfaces/INode'
import { slugify } from './slugify'

export const generateTableOfContent = (abstractSyntaxTree: INode[]): INode[] => {
  const outline: INode = { subheadings: [] }
  const headings = findHeadings(abstractSyntaxTree)
  const path: number[] = []
  mapHeadings(headings, path, outline)
  return outline.subheadings || ([] as INode[])
}

function findHeadings(abstractSyntaxTree: INode[]): INode[] {
  return filterNode(abstractSyntaxTree, node => /h\d/.test(node.style || '')).map(node => {
    const text = getChildrenText(node)
    const slug = slugify(text)

    return { ...node, text, slug }
  })
}

function filterNode(abstractSyntaxTree: INode[], match: (node: INode) => boolean): INode[] {
  return abstractSyntaxTree.reduce((accumulator: INode[], node: INode) => {
    if (match(node)) accumulator.push(node)
    if (node.children) accumulator.push(...filterNode(node.children, match))
    return accumulator
  }, [])
}

function getChildrenText({ children = [] }: INode): string {
  return children.map(node => (typeof node === 'string' ? node : node.text || '')).join('')
}

function mapHeadings(headings: INode[], path: number[], outline: INode): INode[] {
  let lastLevel = 0
  headings.forEach(heading => {
    const level = Number(heading.style?.slice(1))
    heading.subheadings = []

    if (level < lastLevel) for (let i = lastLevel; i >= level; i--) path.pop()
    else if (level === lastLevel) path.pop()

    const prop: INode = getProperty(outline, getObjectPath(path))
    prop.subheadings?.push(heading)
    path.push((prop.subheadings?.length || 0) - 1)
    lastLevel = level
  })
  return headings
}

function getObjectPath(path: number[]): string[] {
  return path.length === 0 ? [] : ['subheadings'].concat(path.join('.subheadings.').split('.'))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getProperty(object: any, path: string[]): INode {
  return path.reduce((previous, current) => previous[current], object)
}
