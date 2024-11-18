export interface ISelect {
  label?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  className?: string
  error?: string
  options: { label: string; value: string }[]
  name: string
  id: string
}
