import { GetComponentData } from '@/components/ComponentsQueries'
import { GetHeroData } from '@/components/Hero/HeroQuery'
import { GetPortableTextData } from '@/components/SicknessContent/SicknessContentQueries'

export const GetStaticParams = `
    *[_type=="newsPages"][] {
        "slug": slug.current
    }
`
export const GetNewsSlugPageData = `
    *[_type=="newsPages" && slug.current == $slug][0] {
        hero {
            ${GetHeroData}
        },
        _createdAt,
        ${GetComponentData},
        ${GetPortableTextData}
    }
`
