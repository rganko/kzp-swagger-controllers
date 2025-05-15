import { Endpoint, Trigger } from '../utils'

export const getTubingModule = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/tubing-module/{tubingModuleId}',
  method: 'get',
  swaggerControllerName: 'tubing-module-controller',
  trigger,
  description: 'Get tubing module'
})

export const updateTubingModule = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/tubing-module/{tubingModuleId}',
  method: 'put',
  swaggerControllerName: 'tubing-module-controller',
  trigger,
  description: 'Update tubing module'
})

export const calculateTubingModule = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/tubing-module/{tubingModuleId}/calculate',
  method: 'post',
  swaggerControllerName: 'tubing-module-controller',
  trigger,
  description: 'Calculate tubing module'
})
