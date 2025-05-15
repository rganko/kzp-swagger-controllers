import { Endpoint, Trigger } from '../utils'

export const addEstimatedResourcesDemandToKzpLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/estimated-resources-demand',
  method: 'post',
  swaggerControllerName: 'estimated-resources-demand-kzp-line-controller',
  trigger,
  description: 'Adds estimated resources demand to kzp line- additional statistic information'
})

export const updateEstimatedResourcesDemandInKzpLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/estimated-resources-demand/{id}',
  method: 'put',
  swaggerControllerName: 'estimated-resources-demand-kzp-line-controller',
  trigger,
  description: 'Edit estimated resources demand - additional statistic information'
})

export const deleteEstimatedResourcesDemandFromKzpLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/estimated-resources-demand/{id}',
  method: 'delete',
  swaggerControllerName: 'estimated-resources-demand-kzp-line-controller',
  trigger,
  description: 'Edit estimated resources demand - additional statistic information'
})

export const searchEstimatedResourcesDemandInKzpLine = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/estimated-resources-demand/search',
  method: 'post',
  swaggerControllerName: 'estimated-resources-demand-kzp-line-controller',
  trigger,
  description: 'Search for estimated resources demand'
})
