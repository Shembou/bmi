import NotFoundComponent from '@/components/common/NotFoundComponent/NotFoundComponent'
import { getCmsData } from '@/utils/getCmsData'
import { INotFound } from './INotFound'
import { GetNotFoundPageData } from './NotFoundQueries'
import Components from '@/components/Components'

export default async function NotFound() {
  const data = await getCmsData<INotFound>({ query: GetNotFoundPageData })

  return (
    <main className="w-full mb-24">
      <NotFoundComponent {...data} />
      <Components content={data.content} />
    </main>
  )
}
