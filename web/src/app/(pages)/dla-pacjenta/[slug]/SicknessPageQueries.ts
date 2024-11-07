import { GetComponentData } from '@/components/ComponentsQueries'
import { GetHeroData } from '@/components/Hero/HeroQuery'
import { GetPortableTextData } from '@/components/SicknessContent/SicknessContentQueries'

export const GetSicknessPagesStaticParams = `
    *[_type=="sicknessPages"][] {
        "slug":slug.current
    }
`

export const GetSicknessPageData = `
    *[_type=="sicknessPages" && slug.current == $slug][0] {
        hero {
            ${GetHeroData}
        },
        ${GetComponentData},
        ${GetPortableTextData}
    }
`
