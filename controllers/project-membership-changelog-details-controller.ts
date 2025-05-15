import { Endpoint, Trigger } from '../utils'

export const getProjectMembershipChangelogDetails = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/changelog/project/{projectId}/member/{membershipId}/change/{trackingId}',
  method: 'get',
  swaggerControllerName: 'project-membership-changelog-details-controller',
  trigger,
  description: 'Project membership changelog details'
})
