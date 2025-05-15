import { Endpoint, Trigger } from '../utils'

export const searchCoopOfferLineItems = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer/{offerId}/line/search',
  method: 'post',
  swaggerControllerName: 'coop-offer-line-item-controller',
  trigger,
  description: 'Searches for offer request lines with offer information'
})
