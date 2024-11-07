import { getCmsData } from '@/utils/getCmsData'
import Components from '@/components/Components'
import { GetPrivacyPolicyPageData } from './IPrivacyPolicyQueries'
import SicknessContent from '@/components/SicknessContent/SicknessContent'
import { IPrivacyPolicy } from './IPrivacyPolicy'

export default async function PrivacyPolicyPage() {
  const data = await getCmsData<IPrivacyPolicy>({ query: GetPrivacyPolicyPageData })
  return (
    <main>
      <SicknessContent content={data.portableText} header={'Polityka Prywatności'} />
      <Components content={data.content} />
    </main>
  )
}
