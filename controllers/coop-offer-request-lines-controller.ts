import { Endpoint, Trigger } from '../utils'

export const addCoopOfferRequestLines = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/{id}/line',
  method: 'post',
  swaggerControllerName: 'coop-offer-request-lines-controller',
  trigger,
  description: 'Add offer request lines'
})

export const removeCoopOfferRequestLines = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/{id}/line',
  method: 'delete',
  swaggerControllerName: 'coop-offer-request-lines-controller',
  trigger,
  description: 'Remove offer request lines'
})
