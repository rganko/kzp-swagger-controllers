import { Endpoint, Trigger } from '../utils'

export const addCalculationLineComment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/line/{lineId}/comment',
  method: 'post',
  swaggerControllerName: 'calculation-line-comment-controller',
  trigger,
  description: 'Adds new comment to line'
})

export const deleteCalculationLineComment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/line/{lineId}/comment/{commentId}',
  method: 'post',
  swaggerControllerName: 'calculation-line-comment-controller',
  trigger,
  description: 'Delete comment from line'
})

export const getCalculationLineComments = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/line/{lineId}/comment',
  method: 'get',
  swaggerControllerName: 'calculation-line-comment-controller',
  trigger,
  description: 'Get comments for line'
})
