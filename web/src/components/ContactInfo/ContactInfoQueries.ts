export const GetContactInfoData = `
    _type == "contactInfo" => {
      employeeCards[] {
        mail,
        name,
        title
      }
    },
`
