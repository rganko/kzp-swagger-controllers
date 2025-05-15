import { Endpoint, Trigger } from '../utils'

export const getFinalAcceptanceProtocolUserApproval = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/acceptance-protocol/{protocolId}/final/approval',
  method: 'get',
  swaggerControllerName: 'acceptance-protocol-user-approval-controller',
  trigger,
  description: 'Get information about logged user final acceptance protocol approval'
})

export const getPartialAcceptanceProtocolUserApproval = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/acceptance-protocol/{protocolId}/partial/approval',
  method: 'get',
  swaggerControllerName: 'acceptance-protocol-user-approval-controller',
  trigger,
  description: 'Get information about logged user partial acceptance protocol approval'
})

export const approveAcceptanceProtocol = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/acceptance-protocol/{protocolId}/approval',
  method: 'post',
  swaggerControllerName: 'acceptance-protocol-user-approval-controller',
  trigger,
  description: 'Approve acceptance protocol'
})
