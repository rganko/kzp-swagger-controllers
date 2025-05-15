import { Endpoint, Trigger } from '../utils'

export const addCalculationPosition = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position',
  method: 'post',
  swaggerControllerName: 'calculation-position-controller',
  trigger,
  description: 'Adds new position to a calculation'
})

export const getCalculationPosition = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}',
  method: 'get',
  swaggerControllerName: 'calculation-position-controller',
  trigger,
  description: 'Get calculation position by position id'
})

export const deleteCalculationPosition = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}',
  method: 'delete',
  swaggerControllerName: 'calculation-position-controller',
  trigger,
  description: 'Delete calculation position'
})

export const getAllCalculationPositions = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/positions',
  method: 'get',
  swaggerControllerName: 'calculation-position-controller',
  trigger,
  description: 'Get all calculation positions'
})

export const getCalculationPositionsDiff = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/positions-diff',
  method: 'post',
  swaggerControllerName: 'calculation-position-controller',
  trigger,
  description: 'Get calculation positions diff'
})

export const getCalculationPositionsForExport = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/positions-for-export',
  method: 'get',
  swaggerControllerName: 'calculation-position-controller',
  trigger,
  description: 'Get calculation positions for export'
})

export const getCalculationPositionHistory = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/history',
  method: 'get',
  swaggerControllerName: 'calculation-position-controller',
  trigger,
  description: 'Get calculation position history'
})

export const getCalculationLineIds = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line-ids',
  method: 'get',
  swaggerControllerName: 'calculation-position-controller',
  trigger,
  description: 'Get calculation line ids'
})

export const getCalculationLineSummary = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line-summary',
  method: 'get',
  swaggerControllerName: 'calculation-position-controller',
  trigger,
  description: 'Get calculation line summary'
})

export const getCalculationPositionsForHistory = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/positions-for-history',
  method: 'get',
  swaggerControllerName: 'calculation-position-controller',
  trigger,
  description: 'Get calculation positions for history'
})

export const searchCalculationPositions = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/positions/search',
  method: 'post',
  swaggerControllerName: 'calculation-position-controller',
  trigger,
  description: 'Search calculation positions'
})

export const getCalculationPositionsSummary = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/positions/summary',
  method: 'get',
  swaggerControllerName: 'calculation-position-controller',
  trigger,
  description: 'Get calculation positions summary'
})

export const updateCalculationPositionSoldStatus = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/sold',
  method: 'put',
  swaggerControllerName: 'calculation-position-controller',
  trigger,
  description: 'Update calculation position sold status'
})

export const sortCalculationPositions = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/positions/sort',
  method: 'post',
  swaggerControllerName: 'calculation-position-controller',
  trigger,
  description: 'Sort calculation positions'
})

export const syncCalculationPositions = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/positions/sync',
  method: 'post',
  swaggerControllerName: 'calculation-position-controller',
  trigger,
  description: 'Sync calculation positions'
})
