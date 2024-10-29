import {defineField} from 'sanity'
import {OlistIcon} from '@sanity/icons'

export default {
  name: 'enumeratedTiles',
  title: 'Sekcja z liczonymi tytułami',
  type: 'object',
  icon: OlistIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Nagłówek',
    }),
    defineField({
      name: 'tiles',
      title: 'odliczane tytuły',
      type: 'array',
      of: [{type: 'tile', title: 'kafelek', name: 'tile'}],
    }),
  ],
}
