import {defineField} from 'sanity'

export default {
  name: 'info',
  title: 'Informacje',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Nazwa szpitala',
    }),
    defineField({
      type: 'mailConfiguration',
      name: 'mailConfiguration',
      title: 'Adres e-mail',
    }),
    defineField({
      type: 'addressConfiguration',
      name: 'addressConfiguration',
      title: 'Adres szpitala',
    }),
    defineField({
      type: 'phoneConfiguration',
      name: 'phoneConfiguration',
      title: 'numery telefonów',
    }),
  ],
}

export const mailConfiguration = {
  name: 'mailConfiguration',
  type: 'object',
  title: 'Adres e-mail',
  fields: [
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo',
    }),
    defineField({
      name: 'mail',
      type: 'email',
      title: 'E-mail',
    }),
  ],
}

export const addressConfiguration = {
  name: 'addressConfiguration',
  type: 'object',
  title: 'Adres',
  fields: [
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Adres szpitala',
    }),
  ],
}
export const phoneConfiguration = {
  name: 'phoneConfiguration',
  type: 'object',
  title: 'Numery telefonów',
  fields: [
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo',
    }),
    defineField({
      name: 'phoneNumbers',
      type: 'array',
      title: 'Numery telefonów',
      of: [
        defineField({
          name: 'phoneNumber',
          type: 'string',
          title: 'Numer telefonu',
        }),
      ],
    }),
  ],
}
