import {BillIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default {
  name: 'calculator',
  title: 'Kalkulator',
  type: 'object',
  icon: BillIcon,
  fields: [
    defineField({
      type: 'bmi',
      title: 'formularz BMI',
      name: 'bmi',
    }),
    defineField({
      type: 'score',
      title: 'formularz SCORE',
      name: 'score',
    }),
  ],
}
