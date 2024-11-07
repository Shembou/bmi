import { GetButtonData } from '@/components/common/Button/ButtonQueries'
import { GetComponentData } from '@/components/ComponentsQueries'

export const GetNotFoundPageData = `
*[_type=="notFoundPage"][0]{
    heading,
    description,
    button {
        ${GetButtonData}
    },
    additionalButton {
        ${GetButtonData}
    },
    ${GetComponentData}
}
`
