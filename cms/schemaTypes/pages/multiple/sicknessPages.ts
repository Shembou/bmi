import {ActivityIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default {
  name: 'sicknessPages',
  title: 'Strony dla pacjenta',
  type: 'document',
  icon: ActivityIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nazwa strony',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Adres url',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'hero',
      type: 'hero',
      title: 'Sekcja wstępna',
    }),
    defineField({
      name: 'portableText',
      type: 'portableText',
      title: 'Zawrtość podstrony dla pacjenta',
    }),
    defineField({
      name: 'content',
      type: 'content',
      title: 'Komponenty strony',
    }),
  ],
}
