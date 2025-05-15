import { Endpoint, Trigger } from '../utils'

export const addNewKzpLineComment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/kzp/line/{lineId}/comment',
  method: 'post',
  swaggerControllerName: 'kzp-line-comment-controller',
  trigger,
  description: 'Adds new comment to kzp line'
})

export const deleteKzpLineComment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/kzp/line/{lineId}/comment/{commentId}',
  method: 'post',
  swaggerControllerName: 'kzp-line-comment-controller',
  trigger,
  description: 'Delete comment from kzp line'
})

export const searchKzpLineComments = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/kzp/line/{lineId}/comment/search',
  method: 'post',
  swaggerControllerName: 'kzp-line-comment-controller',
  trigger,
  description: 'Searches for comments of kzp line'
})
