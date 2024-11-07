import { IComponents } from '@/components/IComponents'
import { getCmsData } from '@/utils/getCmsData'
import { GetVideoPageData } from './VideoPageQueries'
import Components from '@/components/Components'

export default async function VideoPage() {
  const data = await getCmsData<IComponents>({ query: GetVideoPageData })

  return (
    <main>
      <Components content={data.content} />
    </main>
  )
}
