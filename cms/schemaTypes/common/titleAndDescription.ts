import {defineField} from 'sanity'

export const titleAndDescription = {
  name: 'titleAndDescription',
  type: 'object',
  title: 'tytuł z opisem',
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
