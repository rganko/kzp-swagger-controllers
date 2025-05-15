import { Endpoint, Trigger } from '../utils'

export const createEnergyFactor = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/energy-factor',
  method: 'post',
  swaggerControllerName: 'energy-factor-settlement-controller',
  trigger,
  description: 'Adds new energy factor to project'
})

export const updateEnergyFactor = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/energy-factor/{id}',
  method: 'put',
  swaggerControllerName: 'energy-factor-settlement-controller',
  trigger,
  description: 'Edit energy factor to project'
})

export const searchEnergyFactorsByProject = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/energy-factor/search',
  method: 'post',
  swaggerControllerName: 'energy-factor-settlement-controller',
  trigger,
  description: 'Search for energy factor under project'
})
