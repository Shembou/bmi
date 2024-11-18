export interface ICheckbox {
  value: boolean
  onChange: (checked: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  name: string
  required?: boolean
  children?: JSX.Element
}
