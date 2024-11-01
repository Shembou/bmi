import { Dispatch } from 'react'
import { IImage } from '../common/Img/IImg'

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
    image: IImage
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

  currentStep: number
}
