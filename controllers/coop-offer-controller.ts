import { Endpoint, Trigger } from '../utils'

export const getCoopOffer = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer/{id}',
  method: 'get',
  swaggerControllerName: 'coop-offer-controller',
  trigger,
  description: 'Reads offer'
})

export const updateCoopOffer = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer/{id}',
  method: 'put',
  swaggerControllerName: 'coop-offer-controller',
  trigger,
  description: 'Updates offer'
})

export const acceptCoopOffer = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer/{id}/accept',
  method: 'put',
  swaggerControllerName: 'coop-offer-controller',
  trigger,
  description: 'Accept offer'
})

export const getCoopOfferChangelog = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer/{id}/changelog',
  method: 'get',
  swaggerControllerName: 'coop-offer-controller',
  trigger,
  description: 'Get changelog for offer'
})

export const deleteCoopOffer = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer/{id}/delete',
  method: 'put',
  swaggerControllerName: 'coop-offer-controller',
  trigger,
  description: 'Delete offer'
})

export const rejectCoopOffer = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer/{id}/reject',
  method: 'put',
  swaggerControllerName: 'coop-offer-controller',
  trigger,
  description: 'Reject offer'
})

export const updateCoopOfferReceivers = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer/{id}/receivers',
  method: 'put',
  swaggerControllerName: 'coop-offer-controller',
  trigger,
  description: 'Update offer receivers'
})

export const searchCoopOffers = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer/search',
  method: 'post',
  swaggerControllerName: 'coop-offer-controller',
  trigger,
  description: 'Search offers'
})
