import {defineField} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export default {
  name: 'homePage',
  title: 'Strona główna',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'content',
      type: 'content',
      title: 'Zawartość podstrony',
    }),
  ],
}
