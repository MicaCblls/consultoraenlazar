import {defineCliConfig} from 'sanity/cli'
import {myStudioProjectId} from './src/enviroment'

export default defineCliConfig({
  api: {
    projectId: myStudioProjectId,
    dataset: 'production',
  },
})
