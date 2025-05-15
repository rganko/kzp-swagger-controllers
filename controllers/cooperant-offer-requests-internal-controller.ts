import { Endpoint, Trigger } from '../utils'

export const getCooperantOfferRequestDetails = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{cooperantPersonId}/offer-requests/{offerRequestId}',
  method: 'get',
  swaggerControllerName: 'cooperant-offer-requests-internal-controller',
  trigger,
  description: 'Get cooperant offer request details'
})

export const searchCooperantOfferRequests = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{cooperantPersonId}/offer-requests/search',
  method: 'post',
  swaggerControllerName: 'cooperant-offer-requests-internal-controller',
  trigger,
  description: 'Search of ships with offers by cooperant person'
})
