import {
  PortableText,
  PortableTextBlock,
  PortableTextReactComponents,
  toPlainText
} from 'next-sanity'
import Markdown from '../common/Markdown/Markdown'
import { slugify } from '@/utils/slugify'
import { portableTextToMarkdown } from '@/utils/portableTextToMarkdown'
import { INode } from '@/app/Interfaces/INode'
import PortableImagesGrid from '../PortableImagesGrid/PortableImagesGrid'
import { IPortableImagesGrid } from '../PortableImagesGrid/IPortableImagesGrid'
import { generateTableOfContent } from '@/utils/generateTableOfContent'
import TableOfContent from './TableOfContent'

export default function SicknessContent({ content }: { content: PortableTextBlock[] }) {
  if (!content) return null

  const components = {
    types: {
      portableImagesGrid: ({ value }: { value: IPortableImagesGrid }) => (
        <PortableImagesGrid {...value} />
      )
    },
    block: {
      h2: ({ value }: { value: [] }) => (
        <Markdown.h2 id={slugify(toPlainText(value))}>
          {portableTextToMarkdown(value as INode)}
        </Markdown.h2>
      ),
      h3: ({ value }: { value: [] }) => (
        <Markdown.h3 id={slugify(toPlainText(value))} className="pt-12">
          {portableTextToMarkdown(value as INode)}
        </Markdown.h3>
      ),
      h4: ({ value }: { value: [] }) => (
        <Markdown.h4 id={slugify(toPlainText(value))}>
          {portableTextToMarkdown(value as INode)}
        </Markdown.h4>
      ),
      normal: ({ value }: { value: [] }) => (
        <Markdown className="pt-4">{portableTextToMarkdown(value as INode)}</Markdown>
      )
    },
    listItem: {
      number: ({ children }: { children: React.ReactNode[] }) => (
        <Markdown.li className="list-none">{children[0] as string}</Markdown.li>
      ),
      bullet: ({ children }: { children: React.ReactNode[] }) => (
        <li className="list-none">{children}</li>
      )
    },
    list: {
      bullet: ({ children }: { children: React.ReactNode }) => (
        <ul className="grid gap-4 pt-8 list-none">{children}</ul>
      ),
      number: ({ children }: { children: React.ReactNode }) => (
        <ol className="list-none">{children}</ol>
      )
    },
    marks: {
      link: ({ value, children }: { value: { href: string }; children: string }) => {
        return (
          <a href={value.href} target="_blank" rel="noreferrer noopener" className="link">
            {children}
          </a>
        )
      }
    }
  }

  const nodes = generateTableOfContent(content as INode[])

  return (
    <section className="grid gap-12  grid-flow-row xl:grid-flow-col xl:grid-cols-12">
      <TableOfContent content={nodes} />
      <div className="col-span-7">
        <PortableText
          components={components as unknown as Partial<PortableTextReactComponents>}
          value={content}
        />
      </div>
    </section>
  )
}
