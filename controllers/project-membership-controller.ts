import { Endpoint, Trigger } from '../utils'

export const editProjectMember = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/membership/{membershipId}',
  method: 'put',
  swaggerControllerName: 'project-membership-controller',
  trigger,
  description: 'Edits member of a project'
})

export const deleteProjectMember = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/membership/{membershipId}',
  method: 'delete',
  swaggerControllerName: 'project-membership-controller',
  trigger,
  description: 'Deletes member of a project'
})
