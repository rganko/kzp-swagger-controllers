import { Endpoint, Trigger } from '../utils'

export const editCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}',
  method: 'put',
  swaggerControllerName: 'calculation-line-edit-controller',
  trigger,
  description: 'Edits line'
})

export const cancelCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}/cancel',
  method: 'put',
  swaggerControllerName: 'calculation-line-edit-controller',
  trigger,
  description: 'Calculation line canceling'
})

export const editAdditionalObjectsLink = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}/edit-additional-objects-link',
  method: 'put',
  swaggerControllerName: 'calculation-line-edit-controller',
  trigger,
  description: 'Edits additional objects link for line'
})

export const editCalculationLineMapping = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}/edit-mapping',
  method: 'put',
  swaggerControllerName: 'calculation-line-edit-controller',
  trigger,
  description: 'Edits line mapping'
})
