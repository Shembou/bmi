import { IImage } from '../Img/IImg'

export interface IFooter {
  info: {
    name: string
    addressConfiguration: {
      logo: IImage
      address: string
    }
    mailConfiguration: {
      mail: string
      logo: IImage
    }
    phoneConfiguration: {
      logo: IImage
      phoneNumbers: {
        key: string
      }[]
    }
  }
  links: {
    name: string
    isExpandable: boolean
    link: string
    sublinks: {
      link: string
      name: string
    }[]
  }[]
}
