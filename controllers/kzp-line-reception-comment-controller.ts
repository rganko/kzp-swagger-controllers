import { Endpoint, Trigger } from '../utils'

export const addKzpLineReceptionComment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/reception/comment',
  method: 'post',
  swaggerControllerName: 'kzp-line-reception-comment-controller',
  trigger,
  description: 'Adds new comment before reception'
})

export const getKzpLineReceptionComments = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/reception/comment/list',
  method: 'get',
  swaggerControllerName: 'kzp-line-reception-comment-controller',
  trigger,
  description: 'Get reception comments'
})

export const markKzpLineReceptionCommentAsRead = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/reception/comment/read',
  method: 'put',
  swaggerControllerName: 'kzp-line-reception-comment-controller',
  trigger,
  description: 'Mark reception comment as read'
})
