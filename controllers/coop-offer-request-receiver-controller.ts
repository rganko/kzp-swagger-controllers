import { Endpoint, Trigger } from '../utils'

export const getCoopOfferRequestReceiver = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request-receiver/{id}',
  method: 'get',
  swaggerControllerName: 'coop-offer-request-receiver-controller',
  trigger,
  description: 'Gets offer request receiver'
})

export const updateCoopOfferRequestReceiver = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request-receiver/{id}',
  method: 'put',
  swaggerControllerName: 'coop-offer-request-receiver-controller',
  trigger,
  description: 'Updates offer request receiver'
})

export const deleteCoopOfferRequestReceiver = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request-receiver/{id}/delete',
  method: 'delete',
  swaggerControllerName: 'coop-offer-request-receiver-controller',
  trigger,
  description: 'Delete offer request receiver'
})

export const getCoopOfferRequestReceiverHistory = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request-receiver/{id}/history',
  method: 'get',
  swaggerControllerName: 'coop-offer-request-receiver-controller',
  trigger,
  description: 'Gets offer request receiver history'
})

export const searchCoopOfferRequestReceivers = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request-receiver/search',
  method: 'post',
  swaggerControllerName: 'coop-offer-request-receiver-controller',
  trigger,
  description: 'Search for offer request receivers'
})
