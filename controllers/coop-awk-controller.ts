import { Endpoint, Trigger } from '../utils'

export const searchCoopAwks = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/awk',
  method: 'post',
  swaggerControllerName: 'coop-awk-controller',
  trigger,
  description: 'Search for accepted offers (AWK)'
})
