import { Endpoint, Trigger } from '../utils'

export const getProjectCard = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/card',
  method: 'get',
  swaggerControllerName: 'project-card-controller',
  trigger,
  description: 'Get project card'
})

export const searchProjectCards = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/card/search',
  method: 'post',
  swaggerControllerName: 'project-card-controller',
  trigger,
  description: 'Search project cards'
})
