import { Endpoint, Trigger } from '../utils'

export const getTkMaterial = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/tk-material/{tkMaterialId}',
  method: 'get',
  swaggerControllerName: 'tk-material-controller',
  trigger,
  description: 'Get TK material'
})

export const updateTkMaterial = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/tk-material/{tkMaterialId}',
  method: 'put',
  swaggerControllerName: 'tk-material-controller',
  trigger,
  description: 'Update TK material'
})

export const createTkMaterial = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/tk-material',
  method: 'post',
  swaggerControllerName: 'tk-material-controller',
  trigger,
  description: 'Create TK material'
})
