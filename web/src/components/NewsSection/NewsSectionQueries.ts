export const GetNewsSectionData = `
    _type =="news" => {
        heading,
        news[]-> {
            "slug": slug.current,
            hero,
            _createdAt
        },
    },
`
