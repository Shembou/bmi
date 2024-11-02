import { IImage } from '../common/Img/IImg'

export interface IContactForm {
  name: string
  content: string
  email: string
  info: {
    name: string
    addressConfiguration: {
      address: string
      logo: IImage
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
}
