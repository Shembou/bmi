import { GetImage } from '../common/Img/ImgQueries'

export const GetPortableImagesGridData = `
    _type =="portableImagesGrid" => {
        images[] {
            ${GetImage}
        }
    }
`
