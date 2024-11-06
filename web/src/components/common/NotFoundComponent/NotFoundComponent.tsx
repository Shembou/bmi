import { INotFound } from '@/app/(login)/INotFound'
import Button from '../Button/Button'
import Markdown from '../Markdown/Markdown'

export default function NotFoundComponent({
  heading,
  button,
  additionalButton,
  description
}: INotFound) {
  return (
    <section className="max-w-130 text-center gap-6 grid py-24 relative justify-self-center">
      <span className="absolute -z-30 text-250 text-error-color opacity-10 self-center right-12">
        404
      </span>
      <Markdown.h3>{heading}</Markdown.h3>
      <p>{description}</p>
      <div className="pt-6 flex gap-6 justify-center">
        <Button {...button} className="px-8" />
        <Button {...additionalButton} className="px-8" />
      </div>
    </section>
  )
}
