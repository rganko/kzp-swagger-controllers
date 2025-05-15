import { Endpoint, Trigger } from '../utils'

export const getAdditionalObjectsTokenStatus = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/external/additional-objects/{id}/token-status',
  method: 'get',
  swaggerControllerName: 'additional-objects-module-controller',
  trigger,
  description: 'Get token status'
})

export const configureAdditionalObjectsModule = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/external/additional-objects/configuration/{configId}',
  method: 'put',
  swaggerControllerName: 'additional-objects-module-controller',
  trigger,
  description: 'Update configuration for external Additional Objects Module'
})

export const generateAdditionalObjectsModuleUrl = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/external/additional-objects/url',
  method: 'post',
  swaggerControllerName: 'additional-objects-module-controller',
  trigger,
  description: 'Generate and save url for external Additional Objects Module'
})
