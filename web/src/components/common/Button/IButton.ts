export interface IButton {
  color?: 'primary' | 'secondary'
  content: string
  link?: string
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}
