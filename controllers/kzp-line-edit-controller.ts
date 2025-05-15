import { Endpoint, Trigger } from '../utils'

/**
 * Updates an existing KZP line with new data
 */
export const editKzpLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}',
  method: 'put',
  swaggerControllerName: 'kzp-line-edit-controller',
  trigger,
  description: 'Update kzp line'
})

/**
 * Cancels a KZP line
 */
export const cancelKzpLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/cancel',
  method: 'put', 
  swaggerControllerName: 'kzp-line-edit-controller',
  trigger,
  description: 'Kzp line canceling'
})

/**
 * Completely cancels a KZP line
 */
export const cancelKzpLineCompletely = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/cancel-completely',
  method: 'put',
  swaggerControllerName: 'kzp-line-edit-controller',
  trigger,
  description: 'Cancel kzp line completely'
})

/**
 * Updates the executor assigned to a KZP line
 */
export const editKzpLineExecutor = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/executor',
  method: 'put',
  swaggerControllerName: 'kzp-line-edit-controller',
  trigger,
  description: 'Update kzp line executor'
})

/**
 * Updates the budget for a KZP line
 */
export const editKzpLineBudget = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/budget',
  method: 'put',
  swaggerControllerName: 'kzp-line-edit-controller',
  trigger,
  description: 'Update kzp line budget'
})

/**
 * Assigns a KZP line to a verification position
 */
export const assignKzpLineToVerificationPosition = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/assign-to-verification-position',
  method: 'put',
  swaggerControllerName: 'kzp-line-edit-controller',
  trigger,
  description: 'Manually assign kzp line to verification position'
})

/**
 * Approves internal cooperation for a KZP line
 */
export const approveKzpLineInternalCooperation = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/internal-cooperation-approve',
  method: 'put',
  swaggerControllerName: 'kzp-line-edit-controller',
  trigger,
  description: 'Kzp line internal cooperation approve'
})

/**
 * Disapproves internal cooperation for a KZP line
 */
export const disapproveKzpLineInternalCooperation = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/internal-cooperation-disapprove',
  method: 'put',
  swaggerControllerName: 'kzp-line-edit-controller',
  trigger,
  description: 'Kzp line internal cooperation disapprove'
})

/**
 * Uncancels a previously cancelled KZP line
 */
export const uncancelKzpLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/uncancel',
  method: 'put',
  swaggerControllerName: 'kzp-line-edit-controller',
  trigger,
  description: 'Kzp line uncanceling'
})
