import { Endpoint, Trigger } from '../utils'

export const addProjectToFavorites = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/favourite-project/{projectId}',
  method: 'post',
  swaggerControllerName: 'favourite-project-controller',
  trigger,
  description: 'Add user\'s favourite project'
})

export const removeProjectFromFavorites = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/favourite-project/{projectId}',
  method: 'delete',
  swaggerControllerName: 'favourite-project-controller',
  trigger,
  description: 'Delete user\'s favourite project'
})
