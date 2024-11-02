import Img from '../common/Img/Img'
import { IPortableImagesGrid } from './IPortableImagesGrid'

export default function PortableImagesGrid({ images }: IPortableImagesGrid) {
  return (
    <section className="grid grid-flow-col pt-12 gap-6">
      {images.map((image, index) => (
        <Img key={index} data={image} width={1300} height={1300} />
      ))}
    </section>
  )
}
