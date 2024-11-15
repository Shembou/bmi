import { IHero } from '@/components/Hero/IHero'
import { PortableTextBlock } from 'next-sanity'

export interface INewsSlugPage {
  hero: IHero
  slug: string
  portableText: PortableTextBlock[]
  _createdAt: string
  content: {
    _type: string
  }[]
}
