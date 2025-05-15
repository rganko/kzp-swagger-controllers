import { Endpoint, Trigger } from '../utils'

export const searchCalculationLineChangelog = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/line',
  method: 'post',
  swaggerControllerName: 'calculation-line-changelog-controller',
  trigger,
  description: 'Searches for project calculation line changelog'
})
