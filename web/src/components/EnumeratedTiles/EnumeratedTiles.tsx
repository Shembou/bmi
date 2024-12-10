import Markdown from '../common/Markdown/Markdown'
import { IEnumeratedTiles } from './IEnumeratedTiles'

export default function EnumeratedTiles({ heading, tiles }: IEnumeratedTiles) {
  return (
    <section className="flex justify-between py-24 lg:flex-row flex-col gap-5" id="OProjekcie">
      <h2>{heading}</h2>
      <div className="gap-16 justify-items-end grid ">
        {tiles.map(({ heading, description }, i) => (
          <div key={i} className="grid gap-6 md:grid-flow-col grid-flow-row items-start">
            <h3
              data-index={`0${i + 1}`}
              className="relative before:content-[attr(data-index)] before:mr-6 before:text-current w-auto"
            >
              {heading}
            </h3>
            <Markdown className="max-w-xl gap-4 grid text-start w-130">{description}</Markdown>
          </div>
        ))}
      </div>
    </section>
  )
}
