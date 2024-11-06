import NotFoundComponent from '@/components/common/NotFoundComponent/NotFoundComponent'
import { getCmsData } from '@/utils/getCmsData'
import { INotFound } from '../(login)/INotFound'
import { GetNotFoundPageData } from '../(login)/NotFoundQueries'
import Components from '@/components/Components'

export default async function NotFound() {
  const data = await getCmsData<INotFound>({ query: GetNotFoundPageData })

  return (
    <main>
      <NotFoundComponent {...data} />
      <Components content={data.content} />
    </main>
  )
}
