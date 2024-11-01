import {StarIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default {
  name: 'simpleHero',
  title: 'Prosta sekcja wstępna',
  type: 'object',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Nagłówek',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Opis',
      type: 'text',
    }),
  ],
}
