import { IButton } from '../common/Button/IButton'
import { IImage } from '../common/Img/IImg'

export interface IHero {
  framedImage: {
    firstIcon: IImage
    image: IImage
    secondIcon: IImage
  }
  text: string
  button: IButton
  heading: string
  tag?: string
  _createdAt?: string
}
