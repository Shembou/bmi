import { GetReferenceSectionData } from '../ReferenceSection/ReferenceSectionQuery'

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
          link,
          referenceSection {
            ${GetReferenceSectionData}
          },
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
