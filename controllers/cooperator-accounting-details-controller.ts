import { Endpoint, Trigger } from '../utils'

export const updateCooperatorAccountingDetails = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperator/{id}/bank-details',
  method: 'put',
  swaggerControllerName: 'cooperator-accounting-details-controller',
  trigger,
  description: 'Updates accounting details'
})
