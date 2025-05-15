import { Endpoint, Trigger } from '../utils'

export const assignKzpPositionToStructure = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/structure/{structureId}',
  method: 'put',
  swaggerControllerName: 'kzp-position-to-structure-controller',
  trigger,
  description: 'Assign kzp position to structure group position'
})

export const bulkAssignKzpPositionsToStructure = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/structure/{structureId}/bulk',
  method: 'put',
  swaggerControllerName: 'kzp-position-to-structure-controller',
  trigger,
  description: 'Assign multiple kzp positions to structure group position'
})

export const reassignShipownerKzpPositions = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/structure/reassign-shipowner-positions',
  method: 'put',
  swaggerControllerName: 'kzp-position-to-structure-controller',
  trigger,
  description: 'Reassign positions that belong to shipowner and are not assigned to any structure'
})
