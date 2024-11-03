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
    <section className="grid md:px-8 items-center justify-between relative overflow-hidden rounded-3xl gap-x-2 grid-flow-col gap-1">
      {isPictureOnRight ? (
        <>
          <div className="absolute h-130 w-130 -left-32 -bottom-48 rounded-full opacity-60 bg-input-border  blur-3xl -z-10"></div>
          <Button {...button} className="self-center md:px-8" />
          <h4>{description}</h4>
          <Img data={image} height={237} width={261} />
        </>
      ) : (
        <>
          <div className="absolute h-130 w-130 -right-64 -bottom-48 rounded-full opacity-60 bg-blur-color  blur-3xl -z-10"></div>
          <Img data={image} height={237} width={261} />
          <h4>{description}</h4>
          <Button {...button} className="self-center md:px-8" />
        </>
      )}
    </section>
  )
}
