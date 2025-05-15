import { Endpoint, Trigger } from '../utils'

export const searchProjectKzpChangelog = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/kzp',
  method: 'post',
  swaggerControllerName: 'kzp-changelog-controller',
  trigger,
  description: 'Searches for project kzp changelog'
})
