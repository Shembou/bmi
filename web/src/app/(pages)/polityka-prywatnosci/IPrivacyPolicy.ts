import { PortableTextBlock } from 'next-sanity'

export interface IPrivacyPolicy {
  portableText: PortableTextBlock[]
  content: {
    _type: string
  }[]
}
