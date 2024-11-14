import { GetImage } from '../common/Img/ImgQueries'

export const GetNewsSectionData = `
    _type =="news" => {
        heading,
        news[]-> {
            "slug": slug.current,
            hero {
                heading,
                text,
                tag,
                framedImage {
                    image {
                        ${GetImage}
                    }
                },
            },
            _createdAt
        },
    },
`
