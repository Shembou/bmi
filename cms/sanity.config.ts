import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {structure} from './src/structure'
import {markdownSchema} from 'sanity-plugin-markdown'
import {CustomMarkdownInput} from './schemaTypes/common/markdown'
import {media} from 'sanity-plugin-media'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'bmi',

  projectId: 'apc6sl76',
  dataset: 'production',

  plugins: [structureTool({structure}), markdownSchema({input: CustomMarkdownInput}), media(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
