import { Endpoint, Trigger } from '../utils'

export const getProjectCoopCoordinators = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/coop-coordinators',
  method: 'get',
  swaggerControllerName: 'project-get-coop-coordinators-controller',
  trigger,
  description: 'Get cooperation coordinators for project'
})
