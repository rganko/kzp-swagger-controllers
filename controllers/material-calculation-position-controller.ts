import { Endpoint, Trigger } from '../utils'

export const groupMaterialsByIndex = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/material/group',
  method: 'post',
  swaggerControllerName: 'material-calculation-position-controller',
  trigger,
  description: 'Group material under position by material index'
})

export const searchCalculationPositionMaterials = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/material/search',
  method: 'post',
  swaggerControllerName: 'material-calculation-position-controller',
  trigger,
  description: 'Search for materials under position'
})

export const sumCalculationPositionMaterials = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/material/summary',
  method: 'get',
  swaggerControllerName: 'material-calculation-position-controller',
  trigger,
  description: 'Get sum of materials under position'
})
