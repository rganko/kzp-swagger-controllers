import { Endpoint, Trigger } from '../utils'

export const searchCalculationChangelog = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/calculation',
  method: 'post',
  swaggerControllerName: 'calculation-changelog-controller',
  trigger,
  description: 'Searches for project calculation changelog'
})
