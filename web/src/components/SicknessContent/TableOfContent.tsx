'use client'
import Link from 'next/link'
import { INode } from '@/app/Interfaces/INode'
import { smoothScroll } from '@/utils/smoothScroll'
import { removeMarkdown } from '@/utils/removeMarkdown'

const TableOfContent = ({ content }: { content: INode[] }) => {
  return (
    <nav
      className={
        'h-min top-4 col-span-5 p-8 rounded-2xl overflow-hidden xl:sticky xl:max-w-xl xl: bg-white'
      }
    >
      <div className="relative z-10">
        <ol className={'grid gap-5'}>
          {content.map(({ text, slug, subheadings }, index) => (
            <li key={index}>
              <Link
                href={`#${slug}`}
                onClick={e => smoothScroll(e, slug)}
                className={'flex gap-2 text-lg no-underline'}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{removeMarkdown(text as string)}</span>
              </Link>
              {(subheadings?.length ?? 0) > 0 && (
                <ul>
                  {subheadings?.map(({ text, slug }, subIndex) => (
                    <li key={subIndex}>
                      <Link href={`#${slug}`} onClick={e => smoothScroll(e, slug)}>
                        <span>{removeMarkdown(text as string)}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
        <div className="absolute h-130 w-130 -left-64 -bottom-20 rounded-full opacity-60 bg-blur-color blur-3xl -z-10"></div>
      </div>
    </nav>
  )
}

export default TableOfContent
