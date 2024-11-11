export interface IRadioGroup {
  label?: string
  onChange: (value: string) => void
  className?: string
  radioValues: IRadio[]
  selectedValue: string
  spanClassName?: string
}

interface IRadio {
  name: string
  value: string
  displayValue?: string
}
