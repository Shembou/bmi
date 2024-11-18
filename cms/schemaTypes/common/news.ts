import {EarthAmericasIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default {
  name: 'news',
  type: 'object',
  title: 'Sekcja z aktualnościami',
  icon: {EarthAmericasIcon},
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Tytuł',
    }),
    defineField({
      name: 'news',
      type: 'array',
      title: 'Referencje do aktualności',
      of: [
        {
          type: 'reference',
          to: {type: 'newsPages'},
          name: 'newsReference',
          title: 'Referencja do aktualności',
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'sekcja z referencjami do aktualności',
      }
    },
  },
}
