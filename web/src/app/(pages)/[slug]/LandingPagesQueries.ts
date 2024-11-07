import { GetComponentData } from '@/components/ComponentsQueries'

export const GetStaticParams = `
    *[_type=="landingPages"][] {
        "slug": slug.current
    }
`
export const GetLandingPageData = `
    *[_type=="landingPages" && slug.current == $slug][0] {
        ${GetComponentData}
    }
`
