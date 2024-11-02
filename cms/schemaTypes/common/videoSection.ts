import {ToggleArrowRightIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default {
  name: 'videoSection',
  type: 'object',
  title: 'Sekcja z filmami video',
  icon: ToggleArrowRightIcon,
  fields: [
    defineField({
      name: 'videos',
      type: 'array',
      title: 'Filmy video',
      of: [{type: 'youtubeVideos', name: 'youtubeVideos', title: 'linki do filmu YouTube'}],
    }),
  ],
}

export const youtubeVideos = {
  name: 'youtubeVideos',
  type: 'object',
  title: 'Filmy youtube',
  fields: [
    defineField({
      title: 'Adres URL',
      type: 'string',
      name: 'url',
    }),
    defineField({
      title: 'Tytuł',
      type: 'string',
      name: 'title',
    }),
    defineField({
      title: 'Opis',
      name: 'description',
      type: 'text',
    }),
  ],
}
