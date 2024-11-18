import { IHero } from '@/components/Hero/IHero'
import { PortableTextBlock } from 'next-sanity'

export interface ISicknessPage {
  slug: string
  content: {
    _type: string
  }[]
  hero: IHero
  portableText: PortableTextBlock[]
}
