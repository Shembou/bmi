import { GetImage } from '../common/Img/ImgQueries'

export const GetCalculatorData = `
    _type == "calculator" => {
      program {
        programHero {
          heading,
          description
        },
        programForm {
          titleAndDescription {
            heading,
            description
          },
          files[] {
            name,
            file {
              asset -> {
                url
              }
            }
          },
          image {
            ${GetImage}
          }
        },
      },
      bmi {
        bmiForm {
          heading,
          description
        },
        bmiHero {
          heading,
          description
        }
      },
      score {
        scoreHero {
          heading,
          description
        },
        scoreForm {
          heading,
          description
        }
      }
    },
`
