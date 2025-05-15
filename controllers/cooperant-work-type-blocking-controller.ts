import { Endpoint, Trigger } from '../utils'

export const blockCooperantWorkType = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperant/{cooperantId}/work-type/block',
  method: 'put',
  swaggerControllerName: 'cooperant-work-type-blocking-controller',
  trigger,
  description: 'Block work type'
})

export const unblockCooperantWorkType = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperant/{cooperantId}/work-type/unblock',
  method: 'put',
  swaggerControllerName: 'cooperant-work-type-blocking-controller',
  trigger,
  description: 'Unblock work type'
})
