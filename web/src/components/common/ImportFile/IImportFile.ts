import { IFormValues } from '@/components/Calculator/Instruction/IFormValues'
import { Dispatch, SetStateAction } from 'react'

export interface IImportFile {
  label: string
  type?: string
  name: string
  className?: string
  accept?: string
  error: string | null
  setError: Dispatch<string | null>
  setFormValues: Dispatch<SetStateAction<IFormValues>>
}
