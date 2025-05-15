import { Endpoint, Trigger } from '../utils'

export const getCalculationPositionSaleChangelogDetails = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/calculation/position/sale/{positionSaleId}/change/{trackingId}',
  method: 'get',
  swaggerControllerName: 'calculation-position-sale-changelog-details-controller',
  trigger,
  description: 'Calculation position sale changelog details'
})
