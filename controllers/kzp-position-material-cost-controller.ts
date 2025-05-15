import { Endpoint, Trigger } from '../utils'

export const searchKzpPositionMaterialCosts = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/material-cost/project/{projectId}/kzp-position/{kzpPositionId}',
  method: 'post',
  swaggerControllerName: 'kzp-position-material-cost-controller',
  trigger,
  description: 'Searches materials with costs for kzp position'
})

export const getKzpPositionMaterialCostsSummary = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/material-cost/project/{projectId}/kzp-position/{kzpPositionId}/summary',
  method: 'post',
  swaggerControllerName: 'kzp-position-material-cost-controller',
  trigger,
  description: 'Gets summary of materials with costs for kzp position'
})
