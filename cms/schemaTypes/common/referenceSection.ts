import {defineField} from 'sanity'
import {DotIcon} from '@sanity/icons'

export default {
  name: 'referenceSection',
  title: 'Sekcja z przyciskiem',
  type: 'object',
  icon: DotIcon,
  fields: [
    defineField({
      name: 'button',
      title: 'Przycisk',
      type: 'button',
    }),
    defineField({
      name: 'description',
      title: 'Opis',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Zdjęcie',
      type: 'image',
    }),
    defineField({
      name: 'isPictureOnRight',
      title: 'Czy zdjęcie znajduje się po prawej stronie',
      type: 'boolean',
      initialValue: true,
    }),
  ],
}
