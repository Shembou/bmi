import { GetComponentData } from '@/components/ComponentsQueries'

export const GetHomePageData = `
    *[_type=="homePage"][0] {
        ${GetComponentData}
    }
`
