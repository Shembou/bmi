'use client'
import Link from 'next/link'
import { INode } from '@/app/Interfaces/INode'
import { smoothScroll } from '@/utils/smoothScroll'
import { removeMarkdown } from '@/utils/removeMarkdown'

const TableOfContent = ({ content, header }: { content: INode[]; header?: string }) => {
  return (
    <>
      {header && <h2 className="xl:absolute">{header}</h2>}
      <nav
        className={`max-h-80vh xl:col-span-5 p-8 rounded-2xl overflow-hidden w-full xl:sticky ${header ? 'xl:top-16 xl:mt-32' : 'top-4'} overflow-y-auto`}
        id={'table of content'}
        title={'table of content'}
      >
        <div className="relative z-10">
          <ol className="grid gap-5">
            {
              content.reduce<{ count: number; elements: JSX.Element[] }>(
                (acc, { text, slug, subheadings }, index) => {
                  acc.count++
                  acc.elements.push(
                    <li key={`main-${index}`} className="grid gap-5">
                      <Link
                        href={`#${slug}`}
                        onClick={e => smoothScroll(e, slug)}
                        className="flex gap-2 text-lg no-underline w-fit"
                      >
                        <span>{String(acc.count).padStart(2, '0')}</span>
                        <span>{removeMarkdown(text as string)}</span>
                      </Link>
                      {(subheadings?.length ?? 0) > 0 && (
                        <ul className="grid gap-5">
                          {subheadings?.map(({ text, slug }, subIndex) => {
                            acc.count++ // Increment for each subheading
                            return (
                              <li key={`sub-${index}-${subIndex}`}>
                                <Link
                                  href={`#${slug}`}
                                  onClick={e => smoothScroll(e, slug)}
                                  className="flex gap-2 text-lg no-underline w-fit"
                                >
                                  <span>{String(acc.count).padStart(2, '0')}</span>
                                  <span>{removeMarkdown(text as string)}</span>
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </li>
                  )
                  return acc
                },
                { count: 0, elements: [] }
              ).elements
            }
          </ol>
          <div className="absolute h-130 w-130 -left-64 -bottom-20 rounded-full opacity-60 dark:bg-white bg-blur-color blur-3xl -z-10"></div>
        </div>
      </nav>
    </>
  )
}

export default TableOfContent
