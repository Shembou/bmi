import isExternalLink from '@/utils/isExternalLink'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { TMarkdown } from './TMarkdown'

const LinkRenderer = ({
  href,
  children
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: React.ReactNode
}) => {
  const isExternal = isExternalLink(href)
  const Element = isExternal ? 'a' : Link

  return (
    <Element
      href={href || ''}
      className="link"
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener'
      })}
    >
      {children}
    </Element>
  )
}

const ListRenderer = ({
  children
}: React.LiHTMLAttributes<HTMLLIElement> & {
  children?: React.ReactNode
}) => <li>{children}</li>

const Markdown = ({ Tag, components, children, className, id, ...props }: TMarkdown) => {
  const markdown = (
    <MDXRemote
      source={children}
      components={{
        ...(Tag && {
          p: ({ children }) => (
            <Tag {...(className && { className: className })} {...(id && { id })} {...props}>
              {children}
            </Tag>
          )
        }),
        a: LinkRenderer,
        li: ListRenderer,
        ol: ({ children }) => <ol className="orderedList">{children}</ol>,
        ul: ({ children }) => <ul className="unorderedList">{children}</ul>,
        ...components
      }}
      {...props}
    />
  )

  return Tag ? (
    markdown
  ) : (
    <div
      {...(className && { className: className })}
      {...(Object.keys(props).length > 0 && {
        ...props
      })}
    >
      {markdown}
    </div>
  )
}

Markdown.h1 = (props: JSX.IntrinsicAttributes & TMarkdown) => <Markdown Tag="h1" {...props} />
Markdown.h2 = (props: JSX.IntrinsicAttributes & TMarkdown) => <Markdown Tag="h2" {...props} />
Markdown.h3 = (props: JSX.IntrinsicAttributes & TMarkdown) => <Markdown Tag="h3" {...props} />
Markdown.h4 = (props: JSX.IntrinsicAttributes & TMarkdown) => <Markdown Tag="h4" {...props} />
Markdown.h5 = (props: JSX.IntrinsicAttributes & TMarkdown) => <Markdown Tag="h5" {...props} />
Markdown.span = (props: JSX.IntrinsicAttributes & TMarkdown) => <Markdown Tag="span" {...props} />
Markdown.li = (props: JSX.IntrinsicAttributes & TMarkdown) => <Markdown Tag="li" {...props} />

export default Markdown
