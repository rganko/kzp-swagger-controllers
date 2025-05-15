import { Endpoint, Trigger } from '../utils'

export const getCalculationPositionChangelogDetails = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/position/{positionId}/change/{trackingId}',
  method: 'get',
  swaggerControllerName: 'calculation-position-changelog-details-controller',
  trigger,
  description: 'Calculation position changelog details'
})
