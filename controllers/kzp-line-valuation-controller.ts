import { Endpoint, Trigger } from '../utils'

export const searchKzpLineValuations = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line-valuation/search',
  method: 'post',
  swaggerControllerName: 'kzp-line-valuation-controller',
  trigger,
  description: 'Gets kzp valuation data on the level of lines'
})

export const getKzpLineValuationSummary = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line-valuation/summary',
  method: 'post',
  swaggerControllerName: 'kzp-line-valuation-controller',
  trigger,
  description: 'Gets kzp valuation summary on the level of lines'
})
