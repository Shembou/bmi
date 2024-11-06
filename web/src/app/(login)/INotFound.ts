import { IButton } from '@/components/common/Button/IButton'

export interface INotFound {
  heading: string
  description: string
  button: IButton
  additionalButton: IButton
  content: {
    _type: string
  }[]
}
