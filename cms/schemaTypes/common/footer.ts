import {defineField, defineType} from 'sanity'
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
    defineField({
      name: 'links',
      type: 'array',
      title: 'Linki',
      of: [
        defineType({
          type: 'footerLink',
          name: 'footerLink',
          title: 'Link do stopki',
        }),
      ],
    }),
  ],
}

export const footerLink = {
  name: 'footerLink',
  type: 'object',
  title: 'Link do stopki',
  fields: [
    defineField({
      type: 'string',
      name: 'link',
      title: 'Link',
    }),
    defineField({
      type: 'string',
      name: 'name',
      title: 'Wyświetlana nazwa',
    }),
    defineField({
      type: 'boolean',
      name: 'isExpandable',
      title: 'Czy jest podstroną?',
      initialValue: false,
    }),
    {
      type: 'array',
      name: 'sublinks',
      title: 'Sublinki',
      of: [
        {
          type: 'object',
          name: 'sublink',
          fields: [
            {
              type: 'string',
              name: 'link',
              title: 'Link',
            },
            {
              type: 'string',
              name: 'name',
              title: 'Nazwa linka',
            },
          ],
        },
      ],
      hidden: ({parent}: {parent: any}) => !parent?.isExpandable,
    },
  ],
}
