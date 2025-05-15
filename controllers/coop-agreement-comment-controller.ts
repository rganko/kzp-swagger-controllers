import { Endpoint, Trigger } from '../utils'

export const createCoopAgreementComment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/comment',
  method: 'post',
  swaggerControllerName: 'coop-agreement-comment-controller',
  trigger,
  description: 'Create agreement comment'
})

export const updateCoopAgreementComment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/comment/{commentId}',
  method: 'put',
  swaggerControllerName: 'coop-agreement-comment-controller',
  trigger,
  description: 'Update agreement comment'
})

export const deleteCoopAgreementComment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/comment/{commentId}',
  method: 'delete',
  swaggerControllerName: 'coop-agreement-comment-controller',
  trigger,
  description: 'Delete agreement comment'
})

export const getCoopAgreementComments = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/comment/list',
  method: 'get',
  swaggerControllerName: 'coop-agreement-comment-controller',
  trigger,
  description: 'Get agreement comments'
})
