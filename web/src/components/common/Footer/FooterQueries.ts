import { GetImage } from '../Img/ImgQueries'

export const GetFooterData = `
    *[_type=="footer" || _type=="meta"][] {
        _type == 'footer' => {
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
            },
            links[] {
                name,
                isExpandable,
                link,
                sublinks[] {
                    link,
                    name
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
