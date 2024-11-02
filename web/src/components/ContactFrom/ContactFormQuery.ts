import { GetImage } from '../common/Img/ImgQueries'

export const GetContactFormData = `
    _type=="contactForm" => {
        name,
        content,
        email,
        info {
            name,
            addressConfiguration {
                address,
                logo {
                    ${GetImage}
                }
            },
            mailConfiguration {
                mail,
                logo {
                    ${GetImage}
                }
            },
            phoneConfiguration {
                logo {
                    ${GetImage}
                },
                phoneNumbers
            }
        }
    },
`
