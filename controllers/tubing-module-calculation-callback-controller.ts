import { Endpoint, Trigger } from '../utils'

export const tubingModuleCalculationCallback = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/tubing-module/calculation/callback',
  method: 'post',
  swaggerControllerName: 'tubing-module-calculation-callback-controller',
  trigger,
  description: 'Handle tubing module calculation callback'
})
