import { INewsSection } from './INewsSection'
import NewsTiles from './NewsTiles'

export default function NewsSection({ heading, news }: INewsSection) {
  return (
    <section className="grid gap-12">
      <h1 className="h3">{heading}</h1>
      <NewsTiles news={news} />
    </section>
  )
}
