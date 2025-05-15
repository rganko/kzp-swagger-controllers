import { Endpoint, Trigger } from '../utils'

export const createKzpLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line',
  method: 'post',
  swaggerControllerName: 'kzp-line-controller',
  trigger,
  description: 'Adds new kzp line'
})

export const getKzpLineById = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{id}',
  method: 'get',
  swaggerControllerName: 'kzp-line-controller',
  trigger,
  description: 'Get kzp line by id'
})

export const removeKzpLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}',
  method: 'delete',
  swaggerControllerName: 'kzp-line-controller',
  trigger,
  description: 'Remove existing kzp line'
})

export const createDecreasingKzpLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/decrease',
  method: 'post',
  swaggerControllerName: 'kzp-line-controller',
  trigger,
  description: 'Adds new decreasing kzp line to given line'
})

export const divideKzpLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/divide',
  method: 'post',
  swaggerControllerName: 'kzp-line-controller',
  trigger,
  description: 'Divide line'
})

export const createIncreasingKzpLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/increase',
  method: 'post',
  swaggerControllerName: 'kzp-line-controller',
  trigger,
  description: 'Adds new increasing kzp line to given line'
})

export const createKzpLinesFromResources = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/add-from-resources',
  method: 'post',
  swaggerControllerName: 'kzp-line-controller',
  trigger,
  description: 'Adds new kzp lines from resources'
})

export const removeAllKzpPositionLines = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/delete-all',
  method: 'post',
  swaggerControllerName: 'kzp-line-controller',
  trigger,
  description: 'Remove all kzp position lines'
})

export const searchKzpGeneralsLines = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/generals/search',
  method: 'post',
  swaggerControllerName: 'kzp-line-controller',
  trigger,
  description: 'Search for kzp generals lines'
})

export const searchKzpLines = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/search',
  method: 'post',
  swaggerControllerName: 'kzp-line-controller',
  trigger,
  description: 'Search for kzp lines'
})

export const searchKzpStandardLines = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/standard/search',
  method: 'post',
  swaggerControllerName: 'kzp-line-controller',
  trigger,
  description: 'Search for kzp standard lines'
})
