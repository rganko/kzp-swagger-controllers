import { Endpoint, Trigger } from '../utils'

export const addCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line',
  method: 'post',
  swaggerControllerName: 'calculation-line-controller',
  trigger,
  description: 'Adds new calculation position line'
})

export const getCalculationLine = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}',
  method: 'get',
  swaggerControllerName: 'calculation-line-controller',
  trigger,
  description: 'Get calculation line by id'
})

export const updateCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}',
  method: 'put',
  swaggerControllerName: 'calculation-line-controller',
  trigger,
  description: 'Updates calculation line'
})

export const deleteCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}',
  method: 'delete',
  swaggerControllerName: 'calculation-line-controller',
  trigger,
  description: 'Deletes calculation line'
})

export const getCalculationLines = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/lines',
  method: 'get',
  swaggerControllerName: 'calculation-line-controller',
  trigger,
  description: 'Get calculation lines'
})

export const updateCalculationLineApproval = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}/approval',
  method: 'put',
  swaggerControllerName: 'calculation-line-controller',
  trigger,
  description: 'Updates calculation line approval'
})

export const duplicateCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}/duplicate',
  method: 'post',
  swaggerControllerName: 'calculation-line-controller',
  trigger,
  description: 'Duplicates calculation line'
})
