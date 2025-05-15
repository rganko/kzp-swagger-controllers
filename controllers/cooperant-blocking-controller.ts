import { Endpoint, Trigger } from '../utils'

export const blockCooperant = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperant/{cooperantId}/block',
  method: 'put',
  swaggerControllerName: 'cooperant-blocking-controller',
  trigger,
  description: 'Block cooperant'
})

export const unblockCooperant = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperant/{cooperantId}/unblock',
  method: 'put',
  swaggerControllerName: 'cooperant-blocking-controller',
  trigger,
  description: 'Unblock cooperant'
})
