import { Endpoint, Trigger } from '../utils'

export const getProductionProject = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/production/project/{projectId}',
  method: 'get',
  swaggerControllerName: 'production-project-controller',
  trigger,
  description: 'Get production project'
})
