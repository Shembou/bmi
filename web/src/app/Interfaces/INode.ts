import { IImage } from '@/components/common/Img/IImg'

export interface INode {
  children?: INode[]
  style?: string
  text?: string
  subheadings?: INode[]
  slug?: string
  _type?: string
  marks?: string
  icon?: IImage
}
