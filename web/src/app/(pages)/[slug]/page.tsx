import { getCmsData } from '@/utils/getCmsData'
import { GetLandingPageData, GetStaticParams } from './LandingPagesQueries'
import { ILandingPage } from './ILandingPage'
import Components from '@/components/Components'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const dynamicPages = await getCmsData<ILandingPage[]>({ query: GetStaticParams })

  return dynamicPages.map(page => ({
    slug: page.slug
  }))
}

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = await params

  const data = await getCmsData<ILandingPage>({ query: GetLandingPageData, params: slug })

  return data ? (
    <main id="mainContent">
      <Components content={data.content} />
    </main>
  ) : (
    notFound()
  )
}
