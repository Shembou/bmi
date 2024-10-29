import {defineField} from 'sanity'

export default {
  name: 'instruction',
  type: 'object',
  title: 'Tytuł i opis instrukcji',
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
