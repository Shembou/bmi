import {ImagesIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default {
  name: 'portableImagesGrid',
  type: 'object',
  title: 'Sekcja ze zdjęciami',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'images',
      type: 'array',
      title: 'Zdjęcia',
      of: [
        defineField({
          type: 'image',
          name: 'image',
          title: 'Zdjęcie',
        }),
      ],
    }),
  ],
}
