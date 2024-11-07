import {CommentIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default {
  name: 'contactInfo',
  title: 'Informacje kontaktowe',
  type: 'object',
  icon: CommentIcon,
  fields: [
    {
      name: 'employeeCards',
      title: 'karty pracowników',
      type: 'array',
      of: [{type: 'employeeCard', name: 'employeeCard'}],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Karta pracowników',
      }
    },
  },
}

export const employeeCard = {
  name: 'employeeCard',
  title: 'Karta pracownika',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'imię',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Tytuł',
    }),
    defineField({
      name: 'mail',
      type: 'string',
      title: 'Adres e-mail',
    }),
  ],
}
