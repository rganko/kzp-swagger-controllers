import { Endpoint, Trigger } from '../utils'

export const getStructureParam = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/structure/param',
  method: 'get',
  swaggerControllerName: 'structure-param-controller',
  trigger,
  description: 'Structure param'
})

export const createStructureParam = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/structure/param',
  method: 'post',
  swaggerControllerName: 'structure-param-controller',
  trigger,
  description: 'Adds structure param'
})

export const updateStructureParam = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/structure/param',
  method: 'put',
  swaggerControllerName: 'structure-param-controller',
  trigger,
  description: 'Edit structure param'
})

export const confirmStructureParam = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/structure/param/confirm',
  method: 'put',
  swaggerControllerName: 'structure-param-controller',
  trigger,
  description: 'Confirm structure param'
})
