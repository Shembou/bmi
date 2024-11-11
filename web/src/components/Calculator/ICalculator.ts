import { Dispatch, SetStateAction } from 'react'
import { IFormValues } from './Instruction/IFormValues'
import { IReferenceSection } from '../ReferenceSection/IReferenceSection'

export interface ICalculator {
  program: IProgram
  bmi: IBmi
  score: IScore
}

export interface IBmi {
  bmiForm: {
    heading: string
    description: string
  }
  bmiHero: {
    heading: string
    description: string
  }
  currentStep: number
  setStep: Dispatch<number>
  formValues: IFormValues
  setFormValues: Dispatch<SetStateAction<IFormValues>>
}

export interface IScore {
  scoreHero: {
    heading: string
    description: string
  }
  scoreForm: {
    heading: string
    description: string
  }
  currentStep: number
  setStep: Dispatch<number>
  formValues: IFormValues
  setFormValues: Dispatch<SetStateAction<IFormValues>>
}

export interface IProgram {
  programHero: {
    heading: string
    description: string
  }
  programForm: {
    titleAndDescription: {
      heading: string
      description: string
    }
    link: string
    referenceSection: IReferenceSection
    files: {
      name: string
      file: {
        asset: {
          url: string
        }
      }
    }[]
  }
  setStep: Dispatch<number>
  formValues: IFormValues
  setFormValues: Dispatch<SetStateAction<IFormValues>>

  currentStep: number
}
