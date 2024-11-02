import { getCmsData } from '@/utils/getCmsData'
import { ISicknessPage } from './ISicknessPage'
import { GetSicknessPageData, GetSicknessPagesStaticParams } from './SicknessPageQueries'
import Components from '@/components/Components'
import Hero from '@/components/Hero/Hero'
import SicknessContent from '@/components/SicknessContent/SicknessContent'

export async function generateStaticParams() {
  const dynamicPages = await getCmsData<ISicknessPage[]>({ query: GetSicknessPagesStaticParams })

  return dynamicPages.map(page => ({
    slug: page.slug
  }))
}

export default async function SicknessPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = await params

  const data = await getCmsData<ISicknessPage>({ query: GetSicknessPageData, params: slug })

  return (
    <main>
      <Hero {...data.hero} />
      <SicknessContent content={data.portableText} />
      <Components content={data.content} />
    </main>
  )
}
