import {defineField} from 'sanity'

export const tile = {
  name: 'tile',
  type: 'object',
  title: 'Kafelek',
  fields: [
    defineField({
      name: 'heading',
      title: 'Tytuł',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Opis',
      type: 'markdown',
    }),
  ],
}
