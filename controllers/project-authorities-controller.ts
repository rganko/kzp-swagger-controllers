import { Endpoint, Trigger } from '../utils'

export const getProjectAuthorities = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/authority',
  method: 'get',
  swaggerControllerName: 'project-authorities-controller',
  trigger,
  description: 'Get project authorities'
})
