import { Endpoint, Trigger } from '../utils'

export const getWorkloadValuationPosition = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/workload-valuation/position/{positionId}',
  method: 'get',
  swaggerControllerName: 'workload-valuation-position-controller',
  trigger,
  description: 'Get workload valuation position'
})

export const updateWorkloadValuationPosition = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/workload-valuation/position/{positionId}',
  method: 'put',
  swaggerControllerName: 'workload-valuation-position-controller',
  trigger,
  description: 'Update workload valuation position'
})
