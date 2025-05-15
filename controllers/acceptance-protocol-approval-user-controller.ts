import { Endpoint, Trigger } from '../utils'

export const listAcceptanceProtocolApprovalUsers = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/project/{projectId}/acceptance-protocol-approval-users/list',
  method: 'get',
  swaggerControllerName: 'acceptance-protocol-approval-user-controller',
  trigger,
  description: 'Get list of user for acceptance protocol obligatory approval'
})

export const addAcceptanceProtocolApprovalUser = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/project/{projectId}/acceptance-protocol-approval-users/{userId}/add',
  method: 'post',
  swaggerControllerName: 'acceptance-protocol-approval-user-controller',
  trigger,
  description: 'Add user for acceptance protocol obligatory approval'
})
export const removeAcceptanceProtocolApprovalUser = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/project/{projectId}/acceptance-protocol-approval-users/{userId}',
  method: 'delete',
  swaggerControllerName: 'acceptance-protocol-approval-user-controller',
  trigger,
  description: 'Remove user from acceptance protocol obligatory approval'
})
