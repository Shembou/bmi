import {InfoOutlineIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default {
  name: 'meta',
  title: 'Metadane',
  type: 'object',
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo strony',
      type: 'image',
    }),
  ],
}
