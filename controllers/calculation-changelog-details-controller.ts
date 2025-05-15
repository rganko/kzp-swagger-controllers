import { Endpoint, Trigger } from '../utils'

export const getCalculationChangelogDetails = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/calculation/{calculationId}/change/{trackingId}',
  method: 'get',
  swaggerControllerName: 'calculation-changelog-details-controller',
  trigger,
  description: 'Project calculation changelog details'
})
