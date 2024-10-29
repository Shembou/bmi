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
    <section className="flex px-8 flex-auto items-center justify-between">
      {isPictureOnRight ? (
        <>
          <Img data={image} height={237} width={261} />
          <h4>{description}</h4>
          <Button {...button} className="self-center" />
        </>
      ) : (
        <>
          <Button {...button} className="self-center" />
          <h4>{description}</h4>
          <Img data={image} height={237} width={261} />
        </>
      )}
    </section>
  )
}
