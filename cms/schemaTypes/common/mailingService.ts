import {EnvelopeIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default {
  name: 'mailingService',
  title: 'Treści do e-maila',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      type: 'contactMail',
      name: 'contactMail',
      title: 'Mail kontaktowy',
    }),
    defineField({
      type: 'programMail',
      name: 'programMail',
      title: 'Mail do programu',
    }),
  ],
}

export const contactMail = {
  name: 'contactMail',
  type: 'object',
  title: 'mail kontaktowy',
  fields: [
    defineField({
      name: 'text',
      type: 'text',
      title: 'Zawartość textowa',
    }),
    defineField({
      name: 'html',
      type: 'text',
      title: 'Zawartość w formacie html',
    }),
  ],
}

export const programMail = {
  name: 'programMail',
  type: 'object',
  title: 'mail do programu',
  fields: [
    defineField({
      name: 'text',
      type: 'text',
      title: 'Zawartość textowa',
    }),
    defineField({
      name: 'html',
      type: 'text',
      title: 'Zawartość w formacie html',
    }),
  ],
}
