import { Endpoint, Trigger } from '../utils'

export const searchKzpEstimatedResourcesDemandChangelog = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/kzp/estimated-resources-demand',
  method: 'post',
  swaggerControllerName: 'estimated-demand-kzp-line-changelog-controller',
  trigger,
  description: 'Searches for estimated resources demand from kzp calculation line changelog'
})

export const getKzpEstimatedResourcesDemandChangeDetails = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/kzp/estimated-resources-demand/{id}/change/{trackingId}',
  method: 'get',
  swaggerControllerName: 'estimated-demand-kzp-line-changelog-controller',
  trigger,
  description: 'Searches for kzp estimated resources demand change details'
})
