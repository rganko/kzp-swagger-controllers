import { Endpoint, Trigger } from '../utils'

export const searchCalculationPositionChangelog = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/position',
  method: 'post',
  swaggerControllerName: 'calculation-position-changelog-controller',
  trigger,
  description: 'Searches for project positions changelog'
})
