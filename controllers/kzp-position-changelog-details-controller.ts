import { Endpoint, Trigger } from '../utils'

export const getKzpPositionChangelogDetails = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/kzp/position/{positionId}/change/{trackingId}',
  method: 'get',
  swaggerControllerName: 'kzp-position-changelog-details-controller',
  trigger,
  description: 'Project kzp position changelog details'
})
