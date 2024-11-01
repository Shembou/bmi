import { IImage } from '../Img/IImg'

export interface IHeader {
  logos: {
    image: IImage
  }[]
  links: {
    isExpandable: boolean
    link: string
    name: string
    sublinks?: {
      link: string
      name: string
    }[]
  }[]
}

export interface ExpandedItems {
  [key: number]: boolean
}
