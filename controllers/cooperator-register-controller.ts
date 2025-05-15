import { Endpoint, Trigger } from '../utils'

export const createCooperatorRegisterData = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperator/register-data',
  method: 'post',
  swaggerControllerName: 'cooperator-register-controller',
  trigger,
  description: 'Adds new cooperator register data'
})

export const updateCooperatorRegisterData = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperator/register-data/{id}',
  method: 'put',
  swaggerControllerName: 'cooperator-register-controller',
  trigger,
  description: 'Updates cooperator'
})
