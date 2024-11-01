export interface ICheckbox {
  label?: string
  value: boolean
  onChange: (checked: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  name: string
  required?: boolean
}
