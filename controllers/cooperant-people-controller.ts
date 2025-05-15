import { Endpoint, Trigger } from '../utils'

export const getCooperantPeople = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{cooperantPersonId}/people',
  method: 'get',
  swaggerControllerName: 'cooperant-people-controller',
  trigger,
  description: 'Get cooperant people'
})
