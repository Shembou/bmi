import {defineField} from 'sanity'
import {EarthGlobeIcon} from '@sanity/icons'

export default {
  name: 'newsPage',
  title: 'Strona z aktualnościami',
  type: 'document',
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: 'content',
      type: 'newsContent',
      title: 'Zawartość podstrony',
    }),
  ],
}
