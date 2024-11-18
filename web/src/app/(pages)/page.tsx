import { IComponents } from '@/components/IComponents'
import { getCmsData } from '@/utils/getCmsData'
import { GetHomePageData } from './HomeQueries'
import Components from '@/components/Components'

export default async function Home() {
  const data = await getCmsData<IComponents>({ query: GetHomePageData })
  return (
    <main id="mainContent">
      <Components content={data.content} />
    </main>
  )
}
