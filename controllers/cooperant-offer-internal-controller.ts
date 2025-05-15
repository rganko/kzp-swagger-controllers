import { Endpoint, Trigger } from '../utils'

export const upsertCooperantOffer = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{personId}/offer-request/{offerRequestId}/offer',
  method: 'put',
  swaggerControllerName: 'cooperant-offer-internal-controller',
  trigger,
  description: 'Create or update (upsert) coop offer'
})

export const changeRequestCooperantOffer = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{personId}/offer-request/{offerRequestId}/offer/change-request',
  method: 'put',
  swaggerControllerName: 'cooperant-offer-internal-controller',
  trigger,
  description: 'Create or update (upsert) coop offer'
})
