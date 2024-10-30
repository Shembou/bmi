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
      type: 'programInstruction',
      title: 'Zapisanie się do programu',
      name: 'programForm',
    }),
  ],
}
