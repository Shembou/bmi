import { GetCheckboxListSection } from '../CheckboxListSection/CheckboxListSectionQueries'
import { GetPortableImagesGridData } from '../PortableImagesGrid/PortableImagesGridQueries'

const GetBlockData = `
    _type=='block' => {
        style,
        children[],
        text,
        subheadings,
        slug,
        marks,
        icon,
        markDefs[],
        listItem,
    },
`

export const GetPortableTextData = `
  portableText[] {
    _type,
    ${GetBlockData}
    ${GetPortableImagesGridData}
    ${GetCheckboxListSection}
  },
`
