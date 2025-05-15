import { Endpoint, Trigger } from '../utils'

export const createCoopOfferRequestComment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/{offerRequestId}/comment',
  method: 'post',
  swaggerControllerName: 'coop-offer-request-comment-controller',
  trigger,
  description: 'Creates comment for specific cooperation offer request'
})

export const searchCoopOfferRequestComments = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/{offerRequestId}/comment/search',
  method: 'post',
  swaggerControllerName: 'coop-offer-request-comment-controller',
  trigger,
  description: 'Returns comments specified by search criteria for specific CoopOfferRequest id'
})
