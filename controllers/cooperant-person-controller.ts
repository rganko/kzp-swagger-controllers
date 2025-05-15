import { Endpoint, Trigger } from '../utils'

export const createCooperantPerson = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperant/{cooperantId}/person',
  method: 'post',
  swaggerControllerName: 'cooperant-person-controller',
  trigger,
  description: 'Adds new cooperant person'
})

export const updateCooperantPerson = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperant/{cooperantId}/person/{cooperantDataPersonId}',
  method: 'put',
  swaggerControllerName: 'cooperant-person-controller',
  trigger,
  description: 'Updates cooperant person'
})

export const deleteCooperantPerson = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperant/{cooperantId}/person/{cooperantDataPersonId}',
  method: 'delete',
  swaggerControllerName: 'cooperant-person-controller',
  trigger,
  description: 'Delete cooperant person'
})

export const getCooperantPerson = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperant/{cooperantId}/person/{cooperantDataPersonId}',
  method: 'get',
  swaggerControllerName: 'cooperant-person-controller',
  trigger,
  description: 'Gets cooperant person'
})

export const searchCooperantPersons = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperant/{cooperantId}/person/search',
  method: 'post',
  swaggerControllerName: 'cooperant-person-controller',
  trigger,
  description: 'Search for cooperant persons'
})
