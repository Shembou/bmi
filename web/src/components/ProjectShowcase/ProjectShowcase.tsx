import Markdown from '../common/Markdown/Markdown'
import { IProjectShowcase } from './IProjectShowcase'

export default function ProjectShowcase({
  arrayTitleAndDescription,
  description,
  heading
}: IProjectShowcase) {
  return (
    <section className="grid xl:gap-32 items-start grid-flow-row lg:grid-cols-10 py-24 lg:gap-10 lg:grid-flow-col gap-y-10">
      <header className="grid gap-6 col-span-4">
        <h2>{heading}</h2>
        <Markdown className="grid gap-4">{description}</Markdown>
      </header>
      <div className="grid gap-8 col-span-6">
        {arrayTitleAndDescription.map(({ description, heading }, index) => (
          <div key={index} className="grid gap-4">
            <h3 className="pl-3 h4">{heading}</h3>
            <Markdown className="p-3 border border-custom-border-color rounded-2xl bg-white dark:bg-black dark:border-dark-icon-bg-color">
              {description}
            </Markdown>
          </div>
        ))}
      </div>
    </section>
  )
}
