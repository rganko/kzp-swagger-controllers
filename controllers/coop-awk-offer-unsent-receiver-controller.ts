import { Endpoint, Trigger } from '../utils'

export const searchCoopAwkUnsentReceivers = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/{id}/awk/unsent-receivers',
  method: 'post',
  swaggerControllerName: 'coop-awk-offer-unsent-receiver-controller',
  trigger,
  description: 'Search for receivers without offer sent'
})
