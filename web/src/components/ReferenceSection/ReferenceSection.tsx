import Button from '../common/Button/Button'
import Img from '../common/Img/Img'
import { IReferenceSection } from './IReferenceSection'

export default function ReferenceSection({
  button,
  description,
  image,
  isPictureOnRight,
  className
}: IReferenceSection) {
  return (
    <section className={`relative overflow-hidden rounded-3xl grid ${className}`}>
      {isPictureOnRight ? (
        <div className="grid md:px-8 items-center gap-x-2 md:grid-flow-col md:gap-1 max-w-96 md:max-w-none md:justify-self-stretch justify-self-center gap-4 py-4 md:py-0">
          <div className="absolute h-130 w-130 -left-32 -bottom-48 rounded-full opacity-60 bg-input-border blur-3xl -z-10 dark:bg-dark-icon-bg-color"></div>
          <Button {...button} className="md:px-8 md:w-fit w-full self-center" />
          <h3 className="text-center h4">{description}</h3>
          <Img data={image} height={237} width={261} className="justify-self-center" />
        </div>
      ) : (
        <div className="grid md:px-8 items-center gap-x-2 md:grid-flow-col md:gap-1 max-w-96 md:max-w-none md:justify-self-stretch justify-self-center gap-4 py-4 md:py-0">
          <div className="absolute h-130 w-130 -right-64 -bottom-48 rounded-full opacity-60 bg-blur-color  blur-3xl -z-10 dark:bg-dark-icon-bg-color"></div>
          <Img data={image} height={237} width={261} className="justify-self-center" />
          <h3 className="text-center h4">{description}</h3>
          <Button {...button} className="md:px-8 md:w-fit w-full place-self-center" />
        </div>
      )}
    </section>
  )
}
