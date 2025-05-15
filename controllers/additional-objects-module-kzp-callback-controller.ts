import { Endpoint, Trigger } from '../utils'

export const updateKzpLineTokenStatus = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/external/additional-objects/callback/project/{projectId}/kzp/position/{positionId}/line/{lineId}',
  method: 'put',
  swaggerControllerName: 'additional-objects-module-kzp-callback-controller',
  trigger,
  description: 'Update token for external Additional Objects Module in context of kzp line'
})

export const applyAdditionalObjectsKzpData = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/external/additional-objects/callback/project/{projectId}/kzp/position/{positionId}/line/{lineId}',
  method: 'post',
  swaggerControllerName: 'additional-objects-module-kzp-callback-controller',
  trigger,
  description: 'Apply additional objects data in context of kzp line'
})
