import { GetComponentData } from '@/components/ComponentsQueries'
import { GetPortableTextData } from '@/components/SicknessContent/SicknessContentQueries'

export const GetRODOPageData = `
    *[_type=="rodoPage"][0] {
        ${GetComponentData},
        ${GetPortableTextData}
    }
`
