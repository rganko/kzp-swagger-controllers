import { Endpoint, Trigger } from '../utils'

export const activateCooperantsBulk = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperant/bulk/activate',
  method: 'post',
  swaggerControllerName: 'cooperant-bulk-controller',
  trigger,
  description: 'Activates cooperants'
})

export const deactivateCooperantsBulk = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperant/bulk/deactivate',
  method: 'post',
  swaggerControllerName: 'cooperant-bulk-controller',
  trigger,
  description: 'Deactivates cooperants'
})
