export interface IInput {
  label: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  placeholder?: string
  className?: string
  error?: string
  pattern?: string
  name: string
  title?: string
  min?: number
  max?: number
  required?: boolean
  textarea?: boolean
}
