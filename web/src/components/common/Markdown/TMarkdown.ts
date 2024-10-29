export type TMarkdown = {
  Tag?: keyof JSX.IntrinsicElements
  components?: Record<string, React.ReactNode>
  children: string
  className?: string
  id?: string
}
