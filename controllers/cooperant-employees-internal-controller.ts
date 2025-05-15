import { Endpoint, Trigger } from '../utils'

export const getCooperantEmployees = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{loggedCooperantPersonId}/employees',
  method: 'get',
  swaggerControllerName: 'cooperant-employees-internal-controller',
  trigger,
  description: 'Get cooperant employees'
})

export const createCooperantEmployee = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{loggedCooperantPersonId}/employees',
  method: 'post',
  swaggerControllerName: 'cooperant-employees-internal-controller',
  trigger,
  description: 'Create cooperant employee'
})

export const getCooperantEmployee = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{loggedCooperantPersonId}/employees/{employeeId}',
  method: 'get',
  swaggerControllerName: 'cooperant-employees-internal-controller',
  trigger,
  description: 'Get cooperant employee'
})

export const updateCooperantEmployee = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{loggedCooperantPersonId}/employees/{employeeId}',
  method: 'put',
  swaggerControllerName: 'cooperant-employees-internal-controller',
  trigger,
  description: 'Update cooperant employee'
})

export const activateCooperantEmployee = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{loggedCooperantPersonId}/employees/{employeeId}/activate',
  method: 'put',
  swaggerControllerName: 'cooperant-employees-internal-controller',
  trigger,
  description: 'Activate cooperant employee'
})

export const deactivateCooperantEmployee = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{loggedCooperantPersonId}/employees/{employeeId}/deactivate',
  method: 'put',
  swaggerControllerName: 'cooperant-employees-internal-controller',
  trigger,
  description: 'Deactivate cooperant employee'
})

export const resetCooperantEmployeePassword = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{loggedCooperantPersonId}/employees/{employeeId}/password-reset',
  method: 'post',
  swaggerControllerName: 'cooperant-employees-internal-controller',
  trigger,
  description: 'Reset cooperant employee password'
})

export const searchCooperantEmployees = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{loggedCooperantPersonId}/employees/search',
  method: 'post',
  swaggerControllerName: 'cooperant-employees-internal-controller',
  trigger,
  description: 'Search cooperant employees'
})
