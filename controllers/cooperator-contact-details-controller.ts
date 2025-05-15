import { Endpoint, Trigger } from '../utils'

export const updateCooperatorContactDetails = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperator/{id}/contact-details',
  method: 'put',
  swaggerControllerName: 'cooperator-contact-details-controller',
  trigger,
  description: 'Updates cooperator contact details'
})
