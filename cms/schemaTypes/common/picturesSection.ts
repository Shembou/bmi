import {defineField} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export default {
  name: 'picturesSection',
  title: 'Sekcja z 3 zdjęciami',
  type: 'object',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Nagłówek',
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Opis',
    }),
    defineField({
      name: 'imagesGrid',
      type: 'imagesGrid',
      title: 'Lista zdjęć z opisem',
    }),
  ],
}

export const imagesGrid = {
  name: 'imagesGrid',
  type: 'array',
  of: [{name: 'imageWithDescription', type: 'imageWithDescription'}],
}

export const imageWithDescription = {
  name: 'imageWithDescription',
  type: 'object',
  fields: [
    defineField({
      type: 'text',
      title: 'Opis',
      name: 'description',
    }),
    defineField({
      type: 'image',
      title: 'Zdjęcie',
      name: 'image',
    }),
  ],
}
