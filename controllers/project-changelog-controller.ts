import { Endpoint, Trigger } from '../utils'

export const searchProjectChangelog = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/project',
  method: 'post',
  swaggerControllerName: 'project-changelog-controller',
  trigger,
  description: 'Searches for project changelog'
})
