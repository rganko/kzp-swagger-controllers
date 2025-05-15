import { Endpoint, Trigger } from '../utils'

export const getCooperantIndustries = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{personId}/industry/list',
  method: 'get',
  swaggerControllerName: 'cooperant-industry-internal-controller',
  trigger,
  description: 'Get accepted and not blocked cooperant industries list'
})
