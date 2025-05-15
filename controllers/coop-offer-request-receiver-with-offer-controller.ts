import { Endpoint, Trigger } from '../utils'

export const getCoopOfferRequestReceiversWithOffer = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/{offerRequestId}/receiver-with-offer',
  method: 'get',
  swaggerControllerName: 'coop-offer-request-receiver-with-offer-controller',
  trigger,
  description: 'Gets all receivers with offer data'
})
