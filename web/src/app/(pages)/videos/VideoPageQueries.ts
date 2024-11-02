import { GetComponentData } from '@/components/ComponentsQueries'

export const GetVideoPageData = `
    *[_type=="videoPage"][0] {
        ${GetComponentData}
    }
`
