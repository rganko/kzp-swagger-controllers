import { Endpoint, Trigger } from '../utils'

export const getPowerOfAttorneyUsers = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/power-of-attorney/project/{projectId}/user/list',
  method: 'get', 
  swaggerControllerName: 'power-of-attorney-user-project-controller',
  trigger,
  description: 'Get power of attorney users for project'
})
