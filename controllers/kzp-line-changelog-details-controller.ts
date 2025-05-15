import { Endpoint, Trigger } from '../utils'

export const getProjectKzpPositionChangelogDetails = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/kzp/line/{lineId}/change/{trackingId}',
  method: 'get',
  swaggerControllerName: 'kzp-line-changelog-details-controller',
  trigger,
  description: 'Project kzp position changelog details'
})
