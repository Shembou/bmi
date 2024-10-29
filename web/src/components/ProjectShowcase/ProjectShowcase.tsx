import Markdown from '../common/Markdown/Markdown'
import { IProjectShowcase } from './IProjectShowcase'

export default function ProjectShowcase({
  arrayTitleAndDescription,
  description,
  heading
}: IProjectShowcase) {
  return (
    <section className="grid gap-32 items-start grid-flow-col grid-cols-10 py-24">
      <header className="grid gap-6 col-span-4">
        <h2>{heading}</h2>
        <Markdown className="grid gap-4">{description}</Markdown>
      </header>
      <div className="grid gap-8 col-span-6">
        {arrayTitleAndDescription.map(({ description, heading }, index) => (
          <div key={index} className="grid gap-4">
            <h4 className="pl-3">{heading}</h4>
            <Markdown className="p-3 border border-custom-border-color rounded-2xl bg-white">
              {description}
            </Markdown>
          </div>
        ))}
      </div>
    </section>
  )
}
