import { Endpoint, Trigger } from '../utils'

export const addCalculationPositionSaleComment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/position/{positionId}/sale-comment',
  method: 'post',
  swaggerControllerName: 'calculation-position-sale-comment-controller',
  trigger,
  description: 'Adds new sale comment to position'
})

export const searchCalculationPositionSaleComments = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/position/{positionId}/sale-comment/search',
  method: 'post',
  swaggerControllerName: 'calculation-position-sale-comment-controller',
  trigger,
  description: 'Search for sale comment'
})
