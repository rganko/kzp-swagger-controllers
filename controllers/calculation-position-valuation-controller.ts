import { Endpoint, Trigger } from '../utils'

export const searchCalculationPositionValuations = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position-valuation/search',
  method: 'post',
  swaggerControllerName: 'calculation-position-valuation-controller',
  trigger,
  description: 'Gets calculation valuation data'
})

export const getCalculationPositionValuationSummary = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position-valuation/summary',
  method: 'post',
  swaggerControllerName: 'calculation-position-valuation-controller',
  trigger,
  description: 'Gets calculation valuation summary'
})
