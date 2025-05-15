import { Endpoint, Trigger } from '../utils'

export const getCooperantProject = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{cooperantPersonId}/projects/{projectId}',
  method: 'get',
  swaggerControllerName: 'cooperant-projects-internal-controller',
  trigger,
  description: 'Caption data of project by id and cooperant person'
})
