import { Endpoint, Trigger } from '../utils'

export const addEstimatedResourcesDemandToCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}/estimated-resources-demand',
  method: 'post',
  swaggerControllerName: 'estimated-resources-demand-calculation-line-controller',
  trigger,
  description: 'Adds estimated resources demand to calculation line - additional statistic information'
})

export const updateEstimatedResourcesDemandInCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}/estimated-resources-demand/{id}',
  method: 'put',
  swaggerControllerName: 'estimated-resources-demand-calculation-line-controller',
  trigger,
  description: 'Edit estimated resources demand - additional statistic information'
})

export const deleteEstimatedResourcesDemandFromCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}/estimated-resources-demand/{id}',
  method: 'delete',
  swaggerControllerName: 'estimated-resources-demand-calculation-line-controller',
  trigger,
  description: 'Remove estimated resources demand - additional statistic data'
})

export const searchEstimatedResourcesDemandInCalculationLine = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}/estimated-resources-demand/search',
  method: 'post',
  swaggerControllerName: 'estimated-resources-demand-calculation-line-controller',
  trigger,
  description: 'Search for estimated resources demand'
})
