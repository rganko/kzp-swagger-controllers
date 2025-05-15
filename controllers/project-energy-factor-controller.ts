import { Endpoint, Trigger } from '../utils'

export const searchProjectEnergyFactors = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/energy-factor/search',
  method: 'get',
  swaggerControllerName: 'project-energy-factor-controller',
  trigger,
  description: 'Get project energy factors'
})
