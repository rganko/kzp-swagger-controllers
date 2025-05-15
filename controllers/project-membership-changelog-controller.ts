import { Endpoint, Trigger } from '../utils'

export const searchProjectMembershipChangelog = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/member',
  method: 'post',
  swaggerControllerName: 'project-membership-changelog-controller',
  trigger,
  description: 'Searches for project membership changelog'
})
