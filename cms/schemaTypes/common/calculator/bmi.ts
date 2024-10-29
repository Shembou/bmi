import {defineField} from 'sanity'

export default {
  name: 'bmi',
  title: 'BMI',
  type: 'object',
  fields: [
    defineField({
      type: 'formHero',
      title: 'Sekcja wstępna',
      name: 'bmiHero',
    }),
    defineField({
      type: 'instruction',
      title: 'Formularz BMI',
      name: 'bmiForm',
    }),
  ],
}
