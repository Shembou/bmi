import {defineField} from 'sanity'
import {DoubleChevronDownIcon} from '@sanity/icons'

export default {
  name: 'footer',
  title: 'Stopka',
  type: 'object',
  icon: DoubleChevronDownIcon,
  fields: [
    defineField({
      name: 'info',
      type: 'info',
    }),
  ],
}
