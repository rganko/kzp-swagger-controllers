import { Endpoint, Trigger } from '../utils'

export const tubingModuleKzpCallback = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/tubing-module/kzp/callback',
  method: 'post',
  swaggerControllerName: 'tubing-module-kzp-callback-controller',
  trigger,
  description: 'Handle tubing module KZP callback'
})
