import {defineField} from 'sanity'

export default {
  name: 'score',
  title: 'SCORE',
  type: 'object',
  fields: [
    defineField({
      type: 'formHero',
      title: 'Sekcja wstępna',
      name: 'scoreHero',
    }),
    defineField({
      type: 'instruction',
      title: 'Formularz SCORE',
      name: 'scoreForm',
    }),
  ],
}
