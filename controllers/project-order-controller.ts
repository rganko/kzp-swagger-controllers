import { Endpoint, Trigger } from '../utils'

export const getProjectOrders = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/order',
  method: 'get',
  swaggerControllerName: 'project-order-controller',
  trigger,
  description: 'Get project orders'
})
