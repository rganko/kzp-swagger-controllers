import { Endpoint, Trigger } from '../utils'

export const searchCoopAwkCurrentNotAcceptedReceivers = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/{id}/awk/current-not-accepted-receivers',
  method: 'post',
  swaggerControllerName: 'coop-awk-offer-receiver-controller',
  trigger,
  description: 'Search for receivers with offer sent for current version of offer request but with not accepted offer'
})

export const searchCoopAwkOutdatedReceivers = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/{id}/awk/outdated-receivers',
  method: 'post',
  swaggerControllerName: 'coop-awk-offer-receiver-controller',
  trigger,
  description: 'Search for receivers with offer sent for outdated version of offer request'
})
