import { Endpoint, Trigger } from '../utils'

export const searchEstimatedResourcesDemandChangelog = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/estimated-resources-demand',
  method: 'post',
  swaggerControllerName: 'estimated-demand-line-changelog-controller',
  trigger,
  description: 'Searches for estimated resources demand from calculation line changelog'
})

export const getEstimatedResourcesDemandChangeDetails = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/estimated-resources-demand/{estimatedDemandId}/change/{trackingId}',
  method: 'get',
  swaggerControllerName: 'estimated-demand-line-changelog-controller',
  trigger,
  description: 'Estimated resources demand details from calculation line changelog'
})
