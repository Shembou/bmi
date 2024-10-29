import { IButton } from '../common/Button/IButton'
import { IImage } from '../common/Img/IImg'

export interface IReferenceSection {
  button: IButton
  image: IImage
  isPictureOnRight: boolean
  description: string
}
