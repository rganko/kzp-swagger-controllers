import { Endpoint, Trigger } from '../utils'

export const getKzpPositionSaleChangelogDetails = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/kzp/position/sale/{positionSaleId}/change/{trackingId}',
  method: 'get',
  swaggerControllerName: 'kzp-position-sale-changelog-details-controller',
  trigger,
  description: 'KZP position sale changelog details'
})
