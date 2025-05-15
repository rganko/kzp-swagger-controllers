import { Endpoint, Trigger } from '../utils'

export const searchCoopAwkAcceptedOffers = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/{id}/awk/accepted-offers',
  method: 'post',
  swaggerControllerName: 'coop-awk-offer-controller',
  trigger,
  description: 'Search for accepted offers for offer request'
})

export const getCoopAwkPrevious = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/{id}/awk/previous',
  method: 'get',
  swaggerControllerName: 'coop-awk-offer-controller',
  trigger,
  description: 'Get previous awk by offer request id'
})
