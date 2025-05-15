import { Endpoint, Trigger } from '../utils'

export const acceptCooperantWorkType = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperant/{cooperantId}/work-type/accept',
  method: 'put',
  swaggerControllerName: 'cooperant-work-type-acceptance-controller',
  trigger,
  description: 'Accept work type'
})

export const rejectCooperantWorkType = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperant/{cooperantId}/work-type/reject',
  method: 'put',
  swaggerControllerName: 'cooperant-work-type-acceptance-controller',
  trigger,
  description: 'Reject work type'
})
