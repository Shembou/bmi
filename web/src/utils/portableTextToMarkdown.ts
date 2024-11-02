import { INode } from '@/app/Interfaces/INode'

export const portableTextToMarkdown = (node: INode): string => {
  if (node._type === 'span') {
    let text = node.text as string
    if (node.marks && node.marks.includes('strong')) {
      text = `**${text}**`
    }
    return text
  }
  if (Array.isArray(node.children)) {
    return node.children.map(child => portableTextToMarkdown(child)).join('')
  }
  return ''
}
