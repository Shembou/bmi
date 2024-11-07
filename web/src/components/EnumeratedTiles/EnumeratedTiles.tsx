import Markdown from '../common/Markdown/Markdown'
import { IEnumeratedTiles } from './IEnumeratedTiles'

export default function EnumeratedTiles({ heading, tiles }: IEnumeratedTiles) {
  return (
    <section className="flex justify-between py-24 lg:flex-row flex-col gap-5">
      <h2>{heading}</h2>
      <div className="gap-16 justify-items-end grid ">
        {tiles.map(({ heading, description }, i) => (
          <div key={i} className="flex gap-6 md:flex-row flex-col">
            <h3
              data-index={`0${i + 1}`}
              className="relative before:content-[attr(data-index)] before:mr-6 before:text-current"
            >
              {heading}
            </h3>
            <Markdown className="max-w-xl gap-4 grid">{description}</Markdown>
          </div>
        ))}
      </div>
    </section>
  )
}
