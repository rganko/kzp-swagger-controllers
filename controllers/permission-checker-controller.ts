import { Endpoint, Trigger } from '../utils'

export const checkPermissions = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/permissions/check',
  method: 'post',
  swaggerControllerName: 'permission-checker-controller',
  trigger,
  description: 'Check permissions'
})
