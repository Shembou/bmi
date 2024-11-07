export interface IImg {
  data: IImage
  width?: number
  height?: number
  alt?: string
  sizes?: string
  priority?: boolean
  className?: string
}

export interface IImage {
  asset: {
    url: string
    altText?: string
    metadata: {
      lqip: string
    }
  }
}
