import { Endpoint, Trigger } from '../utils'

export const searchProjectsSimple = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/search/simple',
  method: 'post',
  swaggerControllerName: 'project-search-controller',
  trigger,
  description: 'Search projects simple'
})

export const searchProjects = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/search',
  method: 'post',
  swaggerControllerName: 'project-search-controller',
  trigger,
  description: 'Search projects'
})
