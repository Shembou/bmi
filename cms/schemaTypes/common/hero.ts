import {defineField} from 'sanity'
import {StarIcon} from '@sanity/icons'

export default {
  name: 'hero',
  title: 'Sekcja wstępna',
  type: 'object',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Nagłówek',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
    defineField({
      name: 'button',
      title: 'Przycisk',
      type: 'button',
    }),
    defineField({
      name: 'framedImage',
      title: 'zdjęcie z ikonami',
      type: 'object',
      fields: [
        defineField({
          name: 'firstIcon',
          title: 'Pierwsza ikona',
          type: 'image',
        }),
        defineField({
          name: 'image',
          title: 'Główne zdjęcie',
          type: 'image',
        }),
        defineField({
          name: 'secondIcon',
          title: 'Druga ikona',
          type: 'image',
        }),
      ],
    }),
  ],
}
