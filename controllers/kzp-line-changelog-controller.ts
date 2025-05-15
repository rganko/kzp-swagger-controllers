import { Endpoint, Trigger } from '../utils'

export const searchKzpLineChangelog = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/kzp/line',
  method: 'post',
  swaggerControllerName: 'kzp-line-changelog-controller',
  trigger,
  description: 'Searches for kzp line changelog'
})
