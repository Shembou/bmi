import { ITilesSection } from './ITilesSection'
import Tiles from './Tiles'

export default function TilesSection({ description, heading, tiles }: ITilesSection) {
  return (
    <section className="grid gap-16 py-24" id="DzialaniaWProjekcie">
      <header className="grid sm:grid-flow-col grid-flow-row items-center sm:grid-cols-2 gap-y-4">
        <h2>{heading}</h2>
        <h4 className="sm:ml-16">{description}</h4>
      </header>
      <div className="flex gap-6 justify-center">
        <Tiles tiles={tiles} />
      </div>
    </section>
  )
}
