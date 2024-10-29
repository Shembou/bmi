import {defineField} from 'sanity'

export default {
  name: 'program',
  title: 'Program',
  type: 'object',
  fields: [
    defineField({
      type: 'formHero',
      title: 'Sekcja wstępna',
      name: 'programHero',
    }),
    defineField({
      type: 'instruction',
      title: 'Formularz SCORE',
      name: 'bmiForm',
    }),
  ],
}
