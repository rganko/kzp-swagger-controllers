import { Endpoint, Trigger } from '../utils'

export const getWebconContext = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/webcon/context',
  method: 'get',
  swaggerControllerName: 'webcon-context-controller',
  trigger,
  description: 'Get Webcon context'
})
