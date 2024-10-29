import { GetButtonData } from '../common/Button/ButtonQueries'
import { GetImage } from '../common/Img/ImgQueries'

export const GetReferenceSectionData = `
    _type == "referenceSection" => {
        button {
            ${GetButtonData}
        },
        image {
            ${GetImage}
        },
        isPictureOnRight,
        description
    },
`
