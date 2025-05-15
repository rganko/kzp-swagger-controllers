import { Endpoint, Trigger } from '../utils'

export const searchMaterialCalculationChangelog = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/material',
  method: 'post',
  swaggerControllerName: 'material-calculation-changelog-controller',
  trigger,
  description: 'Searches for line material changelog'
})

export const getMaterialCalculationChangelogDetails = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/material/{materialId}/change/{trackingId}',
  method: 'get',
  swaggerControllerName: 'material-calculation-changelog-controller',
  trigger,
  description: 'Material changelog details'
})
