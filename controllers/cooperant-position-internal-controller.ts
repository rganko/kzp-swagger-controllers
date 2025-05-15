import { Endpoint, Trigger } from '../utils'

export const getCooperantPositions = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant-position/list',
  method: 'get',
  swaggerControllerName: 'cooperant-position-internal-controller',
  trigger,
  description: 'Get cooperant\'s position list'
})
