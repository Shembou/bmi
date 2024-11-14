import { IHero } from '../Hero/IHero'

export interface INewsSection {
  heading: string
  news: {
    slug: string
    hero: IHero
    _createdAt: string
  }[]
}

export interface INews {
  news: {
    slug: string
    hero: IHero
  }[]
}
