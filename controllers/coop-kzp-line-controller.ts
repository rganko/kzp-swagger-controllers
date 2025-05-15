import { Endpoint, Trigger } from '../utils'

export const getCoopKzpLine = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/kzp-line/{kzpLineId}',
  method: 'get',
  swaggerControllerName: 'coop-kzp-line-controller',
  trigger,
  description: 'Gets kzp line details'
})

export const updateCoopKzpLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/kzp-line/{kzpLineId}',
  method: 'put',
  swaggerControllerName: 'coop-kzp-line-controller',
  trigger,
  description: 'Updates kzp line coop data'
})

export const getCoopKzpLineChanges = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/kzp-line/{kzpLineId}/change-log',
  method: 'get',
  swaggerControllerName: 'coop-kzp-line-controller',
  trigger,
  description: 'Gets kzp line changes'
})

export const getCoopKzpLineCompare = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/kzp-line/{kzpLineId}/compare',
  method: 'get',
  swaggerControllerName: 'coop-kzp-line-controller',
  trigger,
  description: 'Compare kzp line coop data with source data'
})

export const getCoopKzpLineLinkingInfo = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/kzp-line/{kzpLineId}/linking-info',
  method: 'get',
  swaggerControllerName: 'coop-kzp-line-controller',
  trigger,
  description: 'Gets kzp line linking info'
})
