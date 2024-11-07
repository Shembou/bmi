import {defineField} from 'sanity'
import {UnknownIcon} from '@sanity/icons'

export default {
  name: 'privacyPolicyPage',
  title: 'Strona z polityką prywatności',
  type: 'document',
  icon: UnknownIcon,
  fields: [
    defineField({
      name: 'portableText',
      type: 'portableText',
      title: 'Zawrtość podstrony',
    }),
    defineField({
      name: 'content',
      type: 'content',
      title: 'Komponenty strony',
    }),
  ],
}
