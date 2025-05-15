import { Endpoint, Trigger } from '../utils'

export const searchKzpPositionChangelog = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/kzp/position',
  method: 'post',
  swaggerControllerName: 'kzp-position-changelog-controller',
  trigger,
  description: 'Searches for kzp position changelog'
})
