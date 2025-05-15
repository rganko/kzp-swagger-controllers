import { Endpoint, Trigger } from '../utils'

export const getMaterialSum = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/sum/material',
  method: 'get',
  swaggerControllerName: 'kzp-line-sum-controller',
  trigger,
  description: 'Calculate material sum assigned to kzp line'
})

export const getWorkloadSum = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/sum/workload',
  method: 'get',
  swaggerControllerName: 'kzp-line-sum-controller',
  trigger,
  description: 'Calculate workload sum assigned to kzp line'
})
