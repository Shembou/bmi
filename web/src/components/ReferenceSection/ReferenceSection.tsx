import Button from '../common/Button/Button'
import Img from '../common/Img/Img'
import { IReferenceSection } from './IReferenceSection'

export default function ReferenceSection({
  button,
  description,
  image,
  isPictureOnRight
}: IReferenceSection) {
  return (
    <section className="relative overflow-hidden rounded-3xl grid">
      {isPictureOnRight ? (
        <div className="grid md:px-8 items-center gap-x-2 md:grid-flow-col md:gap-1 max-w-96 md:max-w-none md:justify-self-stretch justify-self-center gap-4">
          <div className="absolute h-130 w-130 -left-32 -bottom-48 rounded-full opacity-60 bg-input-border blur-3xl -z-10"></div>
          <Button {...button} className="md:px-8 md:w-fit w-full self-center" />
          <h4 className="text-center">{description}</h4>
          <Img data={image} height={237} width={261} className="justify-self-center" />
        </div>
      ) : (
        <div className="grid md:px-8 items-center gap-x-2 md:grid-flow-col md:gap-1 max-w-96 md:max-w-none md:justify-self-stretch justify-self-center gap-4">
          <div className="absolute h-130 w-130 -right-64 -bottom-48 rounded-full opacity-60 bg-blur-color  blur-3xl -z-10"></div>
          <Img data={image} height={237} width={261} className="justify-self-center" />
          <h4 className="text-center">{description}</h4>
          <Button {...button} className="md:px-8 md:w-fit w-full self-center" />
        </div>
      )}
    </section>
  )
}
