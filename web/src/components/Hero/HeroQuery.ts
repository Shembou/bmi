import { GetButtonData } from '../common/Button/ButtonQueries'
import { GetImage } from '../common/Img/ImgQueries'

export const GetHeroData = `
    _type == "hero" => {
        framedImage {
            firstIcon {
                ${GetImage}
            },
            image {
                ${GetImage}
            },
            secondIcon {
                ${GetImage}
            },
            text
        },
        button {
            ${GetButtonData}
        },
        heading,
        text,
        tag,
    },
`
