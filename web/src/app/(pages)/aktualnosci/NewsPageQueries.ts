import { GetComponentData } from '@/components/ComponentsQueries'

export const GetNewsPageData = `
*[_type=="newsPage"][0] {
    ${GetComponentData}
}
`
