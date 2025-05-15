import { Endpoint, Trigger } from '../utils'

export const addMaterialToKzpLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{kzpPositionId}/line/{kzpLineId}/material',
  method: 'post',
  swaggerControllerName: 'material-kzp-line-controller',
  trigger,
  description: 'Adds new material to kzp line'
})

export const getMaterialFromKzpLine = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{kzpPositionId}/line/{kzpLineId}/material/{materialId}',
  method: 'get',
  swaggerControllerName: 'material-kzp-line-controller',
  trigger,
  description: 'Gets material by id'
})

export const editMaterialInKzpLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{kzpPositionId}/line/{kzpLineId}/material/{materialId}',
  method: 'put',
  swaggerControllerName: 'material-kzp-line-controller',
  trigger,
  description: 'Edits material'
})

export const deleteMaterialFromKzpLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{kzpPositionId}/line/{kzpLineId}/material/{materialId}',
  method: 'delete',
  swaggerControllerName: 'material-kzp-line-controller',
  trigger,
  description: 'Deletes material'
})

export const bulkAddMaterialsToKzpLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{kzpPositionId}/line/{kzpLineId}/material/bulk-add',
  method: 'post',
  swaggerControllerName: 'material-kzp-line-controller',
  trigger,
  description: 'Bulk add materials to kzp line'
})
