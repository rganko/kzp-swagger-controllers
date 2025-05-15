import { Endpoint, Trigger } from '../utils'

export const addCalculationPositionComment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/position/{positionId}/comment',
  method: 'post',
  swaggerControllerName: 'calculation-position-comment-controller',
  trigger,
  description: 'Adds new comment to position'
})

export const searchCalculationPositionComments = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/position/{positionId}/comment/search',
  method: 'post',
  swaggerControllerName: 'calculation-position-comment-controller',
  trigger,
  description: 'Searches for comments of position'
})
