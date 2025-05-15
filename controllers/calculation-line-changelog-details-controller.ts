import { Endpoint, Trigger } from '../utils'

export const getCalculationLineChangelogDetails = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/line/{lineId}/change/{trackingId}',
  method: 'get',
  swaggerControllerName: 'calculation-line-changelog-details-controller',
  trigger,
  description: 'Calculation line changelog details'
})
