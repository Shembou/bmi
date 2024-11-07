export const getProgramMailData = `
    *[_type=="mailingService"][0] {
        programMail {
            html,
            text
        }
    }
`
