import { GetImage } from '../Img/ImgQueries'

export const GetHeaderData = `
*[_type=="meta" || _type == "header"][] {
  _type == 'header' => {
     logos[] {
       image {
            ${GetImage}
        }
     },
     links[] {
      isExpandable,
      link,
      name,
      sublinks[] {
        link,
        name
      }
    },
  },
  _type == 'meta' => {
    logo {
        ${GetImage}
    }
  }
}
`
