import {defineField} from 'sanity'

export default {
  name: 'instruction',
  type: 'object',
  title: 'Tytuł i opis instrukcji',
  fields: [
    defineField({
      name: 'heading',
      title: 'Nagłówek',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Opis',
      type: 'string',
    }),
  ],
}

export const programInstruction = {
  name: 'programInstruction',
  type: 'object',
  title: 'Formularz do programu',
  fields: [
    defineField({
      name: 'titleAndDescription',
      type: 'titleAndDescription',
      title: 'Tytuł i opis',
    }),
    defineField({
      name: 'files',
      type: 'array',
      title: 'Pliki do pobrania',
      of: [{type: 'fileManagement', name: 'fileManagement', title: 'plik'}],
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Zdjęcie obok formularza',
    }),
  ],
}

export const fileManagement = {
  name: 'fileManagement',
  type: 'object',
  title: 'Plik',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nazwa',
    }),
    defineField({
      name: 'file',
      type: 'file',
      title: 'Plik',
    }),
  ],
}
