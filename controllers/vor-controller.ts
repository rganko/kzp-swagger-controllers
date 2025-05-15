import { Endpoint, Trigger } from '../utils'

export const getVor = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/rest/project/{projectId}/kzp/vor/{id}',
  method: 'get',
  swaggerControllerName: 'vor-controller',
  trigger,
  description: 'Gets kzp vor',
})

export const editVor = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/rest/project/{projectId}/kzp/vor/{id}',
  method: 'put',
  swaggerControllerName: 'vor-controller',
  trigger,
  description: 'Edit kzp vor',
})

export const cancelVor = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/rest/project/{projectId}/kzp/vor/{id}/cancel',
  method: 'put',
  swaggerControllerName: 'vor-controller',
  trigger,
  description: 'VOR canceling',
})
