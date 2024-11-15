import {defineField} from 'sanity'

export const checkboxListSection = {
  name: 'checkboxListSection',
  type: 'object',
  title: 'Lista ze sprawdzonymi ikonami',
  fields: [
    defineField({
      name: 'list',
      title: 'lista',
      type: 'array',
      of: [{type: 'markdown', title: 'Zawartość', name: 'description'}],
    }),
  ],
  preview: {
    prepare() {
        return {
            title: 'Lista ze sprawdzonymi ikonami'
        }
    }
  }
}
