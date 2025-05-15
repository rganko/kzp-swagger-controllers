import { Endpoint, Trigger } from '../utils'

export const getProjectKzpChangelogDetails = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/kzp/change/{trackingId}',
  method: 'get',
  swaggerControllerName: 'kzp-changelog-details-controller',
  trigger,
  description: 'Project kzp changelog details'
})
