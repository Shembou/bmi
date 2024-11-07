import { PortableTextBlock } from 'next-sanity'

export interface IRODOPage {
  portableText: PortableTextBlock[]
  content: {
    _type: string
  }[]
}
