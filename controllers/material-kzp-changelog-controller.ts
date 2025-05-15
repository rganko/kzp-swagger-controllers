import { Endpoint, Trigger } from '../utils'

export const searchKzpMaterialChangelog = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/kzp/{projectId}/material',
  method: 'post',
  swaggerControllerName: 'material-kzp-changelog-controller',
  trigger,
  description: 'Searches for kzp material changelog'
})

export const getKzpMaterialChangelogDetails = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/kzp/{projectId}/material/{materialId}/change/{trackingId}',
  method: 'get',
  swaggerControllerName: 'material-kzp-changelog-controller',
  trigger,
  description: 'KZP material changelog details'
})
