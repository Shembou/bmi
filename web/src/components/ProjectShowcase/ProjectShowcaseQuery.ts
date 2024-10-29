export const GetProjectShowcaseData = `
    _type == "projectShowcase" => {    
        heading,
        description,
        arrayTitleAndDescription[] {
            description,
            heading,
        },
    },
`
