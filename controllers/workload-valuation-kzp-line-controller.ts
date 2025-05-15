import { Endpoint, Trigger } from '../utils'

export const getWorkloadValuationKzpLine = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/workload-valuation/kzp/line/{lineId}',
  method: 'get',
  swaggerControllerName: 'workload-valuation-kzp-line-controller',
  trigger,
  description: 'Get workload valuation KZP line'
})

export const updateWorkloadValuationKzpLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/workload-valuation/kzp/line/{lineId}',
  method: 'put',
  swaggerControllerName: 'workload-valuation-kzp-line-controller',
  trigger,
  description: 'Update workload valuation KZP line'
})
