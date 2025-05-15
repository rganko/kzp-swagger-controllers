import { Endpoint, Trigger } from '../utils'

export const getWorkloadValuationKzpPosition = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/workload-valuation/kzp/position/{positionId}',
  method: 'get',
  swaggerControllerName: 'workload-valuation-kzp-position-controller',
  trigger,
  description: 'Get workload valuation KZP position'
})

export const updateWorkloadValuationKzpPosition = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/workload-valuation/kzp/position/{positionId}',
  method: 'put',
  swaggerControllerName: 'workload-valuation-kzp-position-controller',
  trigger,
  description: 'Update workload valuation KZP position'
})
