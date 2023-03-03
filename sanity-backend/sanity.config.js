import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {myStudioProjectId, myStudioTitle} from './src/enviroment'

export default defineConfig({
  name: 'default',
  title: myStudioTitle,

  projectId: myStudioProjectId,
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
