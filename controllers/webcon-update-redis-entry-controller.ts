import { Endpoint, Trigger } from '../utils'

export const updateWebconRedisEntry = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/webcon/redis/{key}',
  method: 'put',
  swaggerControllerName: 'webcon-update-redis-entry-controller',
  trigger,
  description: 'Update Webcon Redis entry'
})
