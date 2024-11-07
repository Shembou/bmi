import {EnvelopeIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default {
  name: 'contactForm',
  type: 'object',
  title: 'formularz kontaktowy',
  icon: EnvelopeIcon,
  fields: [
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      hidden: true,
      initialValue: 'Email',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Imię',
      initialValue: 'Imię',
      hidden: true,
    },
    {
      name: 'content',
      type: 'string',
      title: 'Treść wiadomości',
      hidden: true,
      initialValue: 'Treść wiadomości',
    },
    defineField({
      name: 'info',
      type: 'info',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'formularz kontaktowy',
      }
    },
  },
}
