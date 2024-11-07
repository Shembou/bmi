import {defineField} from 'sanity'
import {WarningOutlineIcon} from '@sanity/icons'

export default {
  name: 'rodoPage',
  title: 'Strona z zawartością RODO',
  type: 'document',
  icon: WarningOutlineIcon,
  fields: [
    defineField({
      name: 'portableText',
      type: 'portableText',
      title: 'Zawrtość podstrony z chorobą',
    }),
    defineField({
      name: 'content',
      type: 'content',
      title: 'Komponenty strony',
    }),
  ],
}
