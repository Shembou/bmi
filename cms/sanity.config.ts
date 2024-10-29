import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './src/structure'
import {markdownSchema} from 'sanity-plugin-markdown'
import {CustomMarkdownInput} from './schemaTypes/common/markdown'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'bmi',

  projectId: 'apc6sl76',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    visionTool(),
    markdownSchema({input: CustomMarkdownInput}),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },
})
