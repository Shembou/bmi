import { TStatus } from './TStatus'

export interface IFormValues {
  age: string
  gender: string
  weight: string
  height: string
  pressure: string
  isSmoking: string
  cholesterol: string
  name: string
  pesel: string
  dateOfBirth: string
  placeOfBirth: string
  education: string
  foreignOrigin: string
  foreignCountry: string
  nationalMinority: string
  isHomeless: string
  isDisabled: string
  phone: string
  email: string
  voivodeship: string
  district: string
  commune: string
  town: string
  postalCode: string
  houseNumber: string
  localNumber: string
  areaOfResidence: 'DEGURBA1' | 'DEGURBA2' | 'DEGURBA3'
  status: TStatus
  shiftChanges: string
  files: Array<string>
  statute: boolean
  rodo: boolean
}
