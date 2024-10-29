import {UlistIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default {
  name: 'projectShowcase',
  title: 'Sekcja z przedstawieniem projektu',
  type: 'object',
  icon: UlistIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Nagłówek',
    }),
    defineField({
      name: 'description',
      type: 'markdown',
      title: 'Opis',
    }),
    defineField({
      name: 'arrayTitleAndDescription',
      type: 'array',
      title: 'lista tytułów wraz z opisem',
      of: [{type: 'titleAndDescription', name: 'titleAndDescription', title: 'tytuł z opisem'}],
    }),
  ],
}
