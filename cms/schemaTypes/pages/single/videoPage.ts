import {defineField} from 'sanity'
import {ToggleArrowRightIcon} from '@sanity/icons'

export default {
  name: 'videoPage',
  title: 'Strona z filmami video',
  type: 'document',
  icon: ToggleArrowRightIcon,
  fields: [
    defineField({
      name: 'content',
      type: 'videoContent',
      title: 'Zawartość podstrony',
    }),
  ],
}
