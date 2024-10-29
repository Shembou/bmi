import { GetImage } from '../common/Img/ImgQueries'

export const GetPictureSectionData = `
    _type == "picturesSection" => {
        heading,
        description,
        imagesGrid[] {
            image {
                ${GetImage}
            },
            description,
        },
    },
`
