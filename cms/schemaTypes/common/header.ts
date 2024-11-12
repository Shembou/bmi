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
    defineField({
      name: 'links',
      type: 'array',
      title: 'Linki',
      of: [
        defineField({
          type: 'headerLink',
          name: 'headerLink',
          title: 'Link do nawigacji',
        }),
      ],
    }),
  ],
}

export const headerLink = {
  name: 'headerLink',
  type: 'object',
  title: 'Link do nawigacji',
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
      title: 'Czy jest rozwijany?',
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
            defineField({
              type: 'boolean',
              name: 'isExpandable',
              title: 'Czy jest rozwijany?',
              initialValue: false,
            }),
            defineField({
              type: 'array',
              name: 'expandableLinks',
              title: 'Rozwijalne linki',
              of: [
                {
                  type: 'object',
                  name: 'expandableLink',
                  title: 'Rozwijalny link',
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
            }),
          ],
        },
      ],
      hidden: ({parent}: {parent: any}) => !parent?.isExpandable,
    },
  ],
}
