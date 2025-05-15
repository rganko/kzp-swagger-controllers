import { Endpoint, Trigger } from '../utils'

export const getVerificationPositionComment = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/verification/position/{verificationPositionId}/comment',
  method: 'get',
  swaggerControllerName: 'verification-position-comment-controller',
  trigger,
  description: 'Get verification position comment'
})

export const createVerificationPositionComment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/verification/position/{verificationPositionId}/comment',
  method: 'post',
  swaggerControllerName: 'verification-position-comment-controller',
  trigger,
  description: 'Create verification position comment'
})
