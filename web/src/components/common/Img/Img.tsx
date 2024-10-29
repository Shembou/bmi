import Image from 'next/image'
import { IImg } from './IImg'

const Img = ({ data, width, height, alt, sizes, priority, ...props }: IImg) => {
  if (data) {
    alt = alt || data.asset?.altText
  }

  return (
    <Image
      src={data.asset.url}
      width={width}
      height={height}
      alt={alt || ''}
      sizes={sizes}
      priority={priority}
      {...((width! > 40 || height! > 40) && {
        blurDataURL: data.asset.metadata.lqip,
        placeholder: 'blur'
      })}
      {...props}
    />
  )
}

export default Img
