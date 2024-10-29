import {defineField} from 'sanity'
import {AddDocumentIcon} from '@sanity/icons'

export default {
  name: 'landingPages',
  title: 'Dodaj stronę',
  type: 'document',
  icon: AddDocumentIcon,
  fields: [
    defineField({
      name: 'content',
      type: 'content',
      title: 'Zawartość podstrony',
    }),
  ],
}
