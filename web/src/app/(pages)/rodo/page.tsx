import { getCmsData } from '@/utils/getCmsData'
import Components from '@/components/Components'
import { GetRODOPageData } from './RODOPageQueries'
import { IRODOPage } from './IRODOPage'
import SicknessContent from '@/components/SicknessContent/SicknessContent'

export default async function RODOPage() {
  const data = await getCmsData<IRODOPage>({ query: GetRODOPageData })
  return (
    <main id="mainContent">
      <SicknessContent content={data.portableText} header={'RODO'} />
      <Components content={data.content} />
    </main>
  )
}
