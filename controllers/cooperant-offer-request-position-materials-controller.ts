import { Endpoint, Trigger } from '../utils'

export const getCooperantOfferRequestPositionMaterials = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{cooperantPersonId}/offer-request/{offerRequestId}/position/{positionId}/materials',
  method: 'get',
  swaggerControllerName: 'cooperant-offer-request-position-materials-controller',
  trigger,
  description: 'List of position materials'
})
