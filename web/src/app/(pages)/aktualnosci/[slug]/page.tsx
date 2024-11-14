import { getCmsData } from '@/utils/getCmsData'
import Components from '@/components/Components'
import { notFound } from 'next/navigation'
import { INewsSlugPage } from './INewsSlugPage'
import { GetNewsSlugPageData, GetStaticParams } from './NewsSlugPageQueries'
import SicknessContent from '@/components/SicknessContent/SicknessContent'
import Hero from '@/components/Hero/Hero'

export async function generateStaticParams() {
  const dynamicPages = await getCmsData<INewsSlugPage[]>({ query: GetStaticParams })

  return dynamicPages.map(page => ({
    slug: page.slug
  }))
}

export default async function NewsSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = await params

  const data = await getCmsData<INewsSlugPage>({ query: GetNewsSlugPageData, params: slug })
  console.log(data.hero)

  return data ? (
    <main>
      <Hero {...data.hero} _createdAt={data._createdAt} />
      <SicknessContent content={data.portableText} />
      <Components content={data.content} />
    </main>
  ) : (
    notFound()
  )
}
