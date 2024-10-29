import {defineField} from 'sanity'

export default {
  name: 'button',
  title: 'Przycisk',
  type: 'object',
  icon: () => '🔘',
  fields: [
    defineField({
      name: 'content',
      title: 'Zawartość',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
    defineField({
      name: 'color',
      title: 'Kolor',
      type: 'string',
      options: {
        list: [
          {title: 'Z zielonym tłem', value: 'primary'},
          {title: 'Z szarym tłem', value: 'secondary'},
        ],
        layout: 'radio',
      },
    }),
  ],
}
