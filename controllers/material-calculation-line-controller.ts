import { Endpoint, Trigger } from '../utils'

export const addMaterialToCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}/material',
  method: 'post',
  swaggerControllerName: 'material-calculation-line-controller',
  trigger,
  description: 'Adds new material'
})

export const getMaterialFromCalculationLine = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}/material/{materialId}',
  method: 'get',
  swaggerControllerName: 'material-calculation-line-controller',
  trigger,
  description: 'Gets material by id'
})

export const editMaterialInCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}/material/{materialId}',
  method: 'put',
  swaggerControllerName: 'material-calculation-line-controller',
  trigger,
  description: 'Edits material'
})

export const deleteMaterialFromCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}/material/{materialId}',
  method: 'delete',
  swaggerControllerName: 'material-calculation-line-controller',
  trigger,
  description: 'Deletes material'
})
