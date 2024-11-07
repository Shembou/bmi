export const getContactMailData = `
    *[_type=="mailingService"][0] {
        contactMail {
            html,
            text
        }
    }
`
