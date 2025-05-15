import { Endpoint, Trigger } from '../utils'

export const getAcceptanceProtocol = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/acceptance-protocol/{id}',
  method: 'get',
  swaggerControllerName: 'acceptance-protocol-controller',
  trigger,
  description: 'Get acceptance protocol'
})

export const updateAcceptanceProtocolComments = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/acceptance-protocol/{protocolId}/comments',
  method: 'put',
  swaggerControllerName: 'acceptance-protocol-controller',
  trigger,
  description: 'Update acceptance protocol comments and notes'
})

export const markFinalAcceptanceProtocol = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/acceptance-protocol/final/mark/{protocolId}',
  method: 'put',
  swaggerControllerName: 'acceptance-protocol-controller',
  trigger,
  description: 'Mark final acceptance protocol'
})
