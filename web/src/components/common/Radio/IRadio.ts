export interface IRadio {
  onChange: (value: string) => void
  radio: {
    name: string
    value: string
  }
  selectedValue: string | boolean
}
