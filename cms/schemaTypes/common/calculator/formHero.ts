import {defineField} from 'sanity'

export default {
  name: 'formHero',
  type: 'object',
  title: 'Sekcja wstępna',
  fields: [
    defineField({
      name: 'heading',
      title: 'Nagłówek',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Opis',
      type: 'string',
    }),
  ],
}
