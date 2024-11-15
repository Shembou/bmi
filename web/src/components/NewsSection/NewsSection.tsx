import { INewsSection } from './INewsSection'
import NewsTiles from './NewsTiles'

export default function NewsSection({ heading, news }: INewsSection) {
  return (
    <section className="grid gap-12">
      <h3>{heading}</h3>
      <NewsTiles news={news} />
    </section>
  )
}
