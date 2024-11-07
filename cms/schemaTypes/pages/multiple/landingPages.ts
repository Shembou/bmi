import {defineField} from 'sanity'
import {AddDocumentIcon} from '@sanity/icons'

export default {
  name: 'landingPages',
  title: 'Dodaj stronę',
  type: 'document',
  icon: AddDocumentIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nazwa podstrony',
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
      name: 'content',
      type: 'content',
      title: 'Zawartość podstrony',
    }),
  ],
}
