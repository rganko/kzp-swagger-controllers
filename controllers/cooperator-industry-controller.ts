import { Endpoint, Trigger } from '../utils'

export const createCooperatorIndustry = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperator/{cooperantId}/industry',
  method: 'post',
  swaggerControllerName: 'cooperator-industry-controller',
  trigger,
  description: 'Adds new cooperant industry and work types'
})

export const updateCooperatorIndustry = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperator/{cooperantId}/industry/{cooperatorIndustryId}',
  method: 'put',
  swaggerControllerName: 'cooperator-industry-controller',
  trigger,
  description: 'Updates cooperant industry and work types'
})

export const deleteCooperatorIndustry = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperator/{cooperantId}/industry/{cooperatorIndustryId}',
  method: 'delete',
  swaggerControllerName: 'cooperator-industry-controller',
  trigger,
  description: 'Deletes cooperant work types under industry id'
})
