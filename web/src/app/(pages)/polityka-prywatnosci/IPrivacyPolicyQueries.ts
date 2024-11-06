import { GetComponentData } from '@/components/ComponentsQueries'
import { GetPortableTextData } from '@/components/SicknessContent/SicknessContentQueries'

export const GetPrivacyPolicyPageData = `
    *[_type=="privacyPolicyPage"][0] {
        ${GetComponentData},
        ${GetPortableTextData}
    }
`
