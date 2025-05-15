import { Endpoint, Trigger } from '../utils'

export const createKzpPosition = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position',
  method: 'post',
  swaggerControllerName: 'kzp-position-controller',
  trigger,
  description: 'Adds new kzp position'
})

export const getKzpPosition = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}',
  method: 'get',
  swaggerControllerName: 'kzp-position-controller',
  trigger,
  description: 'Gets kzp position'
})

export const getKzpPositionsByCalculation = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/by-calculation/{calculationId}/search',
  method: 'post',
  swaggerControllerName: 'kzp-position-controller',
  trigger,
  description: 'Gets kzp positions by calculation'
})

export const searchKzpPositions = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/search',
  method: 'post',
  swaggerControllerName: 'kzp-position-controller',
  trigger,
  description: 'Searches for kzp positions'
})

export const deleteKzpPosition = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}',
  method: 'delete',
  swaggerControllerName: 'kzp-position-controller',
  trigger,
  description: 'Deletes kzp position'
})
