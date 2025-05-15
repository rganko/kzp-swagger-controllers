import { Endpoint, Trigger } from '../utils'

export const searchKzpPositionMaterials = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/material/search',
  method: 'post',
  swaggerControllerName: 'material-kzp-position-controller',
  trigger,
  description: 'Get all materials assigned to kzp line under given position'
})

export const sumKzpPositionMaterials = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/material/summary',
  method: 'get',
  swaggerControllerName: 'material-kzp-position-controller',
  trigger,
  description: 'Get sum of materials under kzp position'
})
