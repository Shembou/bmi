import {defineField} from 'sanity'
import {DashboardIcon} from '@sanity/icons'

export default {
  name: 'tilesSection',
  title: 'Sekcja z kafelkami',
  type: 'object',
  icon: DashboardIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Nagłówek',
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Opis',
    }),
    defineField({
      name: 'tiles',
      type: 'array',
      title: 'Kafelki',
      of: [{type: 'tile', name: 'tile', title: 'kafelek'}],
    }),
  ],
}
