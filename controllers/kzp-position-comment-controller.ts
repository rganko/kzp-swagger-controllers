import { Endpoint, Trigger } from '../utils'

export const addKzpPositionComment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/kzp/position/{positionId}/comment',
  method: 'post',
  swaggerControllerName: 'kzp-position-comment-controller',
  trigger,
  description: 'Adds new comment to kzp position'
})

export const getKzpPositionComments = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/kzp/position/{positionId}/comment/list',
  method: 'get',
  swaggerControllerName: 'kzp-position-comment-controller',
  trigger,
  description: 'Gets comments for kzp position'
})
