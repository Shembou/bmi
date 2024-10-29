import {defineField} from 'sanity'
import {DoubleChevronUpIcon} from '@sanity/icons'

export default {
  name: 'header',
  title: 'Nagłówek',
  type: 'object',
  icon: DoubleChevronUpIcon,
  fields: [
    defineField({
      name: 'logos',
      title: 'Loga',
      type: 'array',
      of: [
        {
          name: 'logo',
          title: 'Logo',
          type: 'object',
          fields: [
            {name: 'image', type: 'image', title: 'Zdjęcie'},
            {name: 'link', type: 'url', title: 'Link'},
            {name: 'separator', type: 'boolean', title: 'Pionowy separator', initialValue: false},
          ],
          preview: {
            select: {
              media: 'image',
              title: 'link',
            },
            prepare({media, title}) {
              return {
                title: title || 'Logo',
                media,
              }
            },
          },
        },
      ],
    }),
  ],
}
