import { IImage } from '../common/Img/IImg'

export interface IPicturesSection {
  heading: string
  description: string
  imagesGrid: {
    description: string
    image: IImage
  }[]
}
