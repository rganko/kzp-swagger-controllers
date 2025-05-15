import { Endpoint, Trigger } from '../utils'

export const searchCalculationLineValuations = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line-valuation/search',
  method: 'post',
  swaggerControllerName: 'calculation-line-valuation-controller',
  trigger,
  description: 'Gets calculation valuation data on the level of lines'
})

export const getCalculationLineValuationSummary = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line-valuation/summary',
  method: 'post',
  swaggerControllerName: 'calculation-line-valuation-controller',
  trigger,
  description: 'Gets calculation valuation summary on the level of lines'
})
