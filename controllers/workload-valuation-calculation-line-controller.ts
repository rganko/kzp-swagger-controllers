import { Endpoint, Trigger } from '../utils'

export const getWorkloadValuationCalculationLine = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/workload-valuation/calculation/line/{lineId}',
  method: 'get',
  swaggerControllerName: 'workload-valuation-calculation-line-controller',
  trigger,
  description: 'Get workload valuation calculation line'
})

export const updateWorkloadValuationCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/workload-valuation/calculation/line/{lineId}',
  method: 'put',
  swaggerControllerName: 'workload-valuation-calculation-line-controller',
  trigger,
  description: 'Update workload valuation calculation line'
})
