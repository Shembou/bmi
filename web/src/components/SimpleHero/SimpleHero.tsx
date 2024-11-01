import { ISimpleHero } from './ISimpleHero'

export default function SimpleHero({ description, heading }: ISimpleHero) {
  return (
    <section>
      <header className="grid text-center max-w-2xl place-self-center gap-6 pb-24">
        <h2>{heading}</h2>
        <p>{description}</p>
      </header>
    </section>
  )
}
