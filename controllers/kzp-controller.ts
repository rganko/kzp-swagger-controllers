import { Endpoint, Trigger } from '../utils'

export const getProjectKzp = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp',
  method: 'get',
  swaggerControllerName: 'kzp-controller',
  trigger,
  description: 'Gets project kzp'
})

export const deleteProjectKzp = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp',
  method: 'delete',
  swaggerControllerName: 'kzp-controller',
  trigger,
  description: 'Delete kzp and all entity created when send calculation to production'
})
