import { GetImage } from '../Img/ImgQueries'

export const GetHeaderData = `
*[_type=="meta" || _type == "header"][] {
  _type == 'header' => {
     logos[] {
       image {
            ${GetImage}
        }
     }
  },
  _type == 'meta' => {
    logo {
        ${GetImage}
    }
  }
}
`
