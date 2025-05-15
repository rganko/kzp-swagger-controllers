import { Endpoint, Trigger } from '../utils'

export const searchStructureGroupPositionChangelog = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/structure',
  method: 'post',
  swaggerControllerName: 'structure-group-position-changelog-controller',
  trigger,
  description: 'Searches for structure group position changelog'
})
