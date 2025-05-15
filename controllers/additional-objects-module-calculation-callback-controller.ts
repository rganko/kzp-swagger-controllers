import { Endpoint, Trigger } from '../utils'

export const updateCalculationLineTokenStatus = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/external/additional-objects/callback/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}',
  method: 'put',
  swaggerControllerName: 'additional-objects-module-calculation-callback-controller',
  trigger,
  description: 'Update token for external Pricing Module in context of calculation line'
})

export const applyAdditionalObjectsCalculationData = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/external/additional-objects/callback/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}',
  method: 'post',
  swaggerControllerName: 'additional-objects-module-calculation-callback-controller',
  trigger,
  description: 'Apply additional objects data in context of calculation line'
})
