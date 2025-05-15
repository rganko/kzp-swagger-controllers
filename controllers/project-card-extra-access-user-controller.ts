import { Endpoint, Trigger } from '../utils'

export const addProjectCardExtraAccessUser = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/card/access/user/{userId}',
  method: 'post',
  swaggerControllerName: 'project-card-extra-access-user-controller',
  trigger,
  description: 'Add extra access user for project card'
})

export const removeProjectCardExtraAccessUser = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/card/access/user/{userId}',
  method: 'delete',
  swaggerControllerName: 'project-card-extra-access-user-controller',
  trigger,
  description: 'Remove extra access user from project card'
})
