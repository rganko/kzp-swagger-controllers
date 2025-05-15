import { Endpoint, Trigger } from '../utils'

export const editStructure = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/structure/{id}',
  method: 'put',
  swaggerControllerName: 'structure-group-position-controller',
  trigger,
  description: 'Edit structure'
})

export const deleteStructure = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/structure/{id}',
  method: 'delete',
  swaggerControllerName: 'structure-group-position-controller',
  trigger,
  description: 'Delete structure'
})
