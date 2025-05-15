import { Endpoint, Trigger } from '../utils'

export const resetCooperantPersonPassword = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{cooperantPersonId}/reset-password',
  method: 'post',
  swaggerControllerName: 'cooperant-person-internal-controller',
  trigger,
  description: 'Get cooperant person by login AD'
})

export const getCooperantPersonByLoginAD = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/byLoginAD',
  method: 'post',
  swaggerControllerName: 'cooperant-person-internal-controller',
  trigger,
  description: 'Get cooperant person by login AD'
})
