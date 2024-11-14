import { getCmsData } from '@/utils/getCmsData'
import Components from '@/components/Components'
import { INewsPage } from './INewsPage'
import { GetNewsPageData } from './NewsPageQueries'

export default async function NewsPage() {
  const data = await getCmsData<INewsPage>({ query: GetNewsPageData })
  return (
    <main>
      <Components content={data.content} />
    </main>
  )
}
