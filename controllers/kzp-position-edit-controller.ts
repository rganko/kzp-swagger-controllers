import { Endpoint, Trigger } from '../utils'

export const editKzpPosition = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}',
  method: 'put',
  swaggerControllerName: 'kzp-position-edit-controller',
  trigger,
  description: 'Edits kzp position'
})

export const cancelKzpPosition = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/cancel',
  method: 'put',
  swaggerControllerName: 'kzp-position-edit-controller',
  trigger,
  description: 'KZP position canceling'
})

export const uncancelKzpPosition = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/uncancel',
  method: 'put',
  swaggerControllerName: 'kzp-position-edit-controller',
  trigger,
  description: 'KZP position uncanceling'
})

export const closeKzpPosition = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/close',
  method: 'put', 
  swaggerControllerName: 'kzp-position-edit-controller',
  trigger,
  description: 'Close kzp position'
})

export const tkApproveKzpPosition = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/tk-approve',
  method: 'put',
  swaggerControllerName: 'kzp-position-edit-controller',
  trigger,
  description: 'TK-approving of kzp position'
})

export const tpApproveKzpPosition = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/tp-approve',
  method: 'put',
  swaggerControllerName: 'kzp-position-edit-controller', 
  trigger,
  description: 'TP-approving of kzp position'
})
