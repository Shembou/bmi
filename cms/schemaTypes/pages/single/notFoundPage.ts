import {WrenchIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default {
  name: 'notFoundPage',
  title: 'Strona nie znaleziono',
  type: 'document',
  icon: WrenchIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'markdown',
      title: 'Komunikat',
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Opis',
    }),
    defineField({
      name: 'button',
      type: 'button',
      title: 'przycisk',
    }),
    defineField({
      name: 'additionalButton',
      type: 'button',
      title: 'dodatkowy przycisk',
    }),
    defineField({
      name: 'content',
      type: 'content',
      title: 'Komponenty strony',
    }),
  ],
}
