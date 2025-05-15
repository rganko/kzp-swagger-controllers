import { Endpoint, Trigger } from '../utils'

export const getCooperantAgreementFinalAcceptanceProtocol = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{personId}/agreement/{agreementId}/acceptance-protocol/final/{id}',
  method: 'get',
  swaggerControllerName: 'cooperant-agreement-acceptance-protocols-internal-controller',
  trigger,
  description: 'Get final acceptance protocol by id'
})

export const financialApproveCooperantAgreementFinalProtocol = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{personId}/agreement/{agreementId}/acceptance-protocol/final/{id}/financial-approve',
  method: 'put',
  swaggerControllerName: 'cooperant-agreement-acceptance-protocols-internal-controller',
  trigger,
  description: 'Financial approval of final acceptance protocol'
})

export const financialDenyCooperantAgreementFinalProtocol = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{personId}/agreement/{agreementId}/acceptance-protocol/final/{id}/financial-deny',
  method: 'put',
  swaggerControllerName: 'cooperant-agreement-acceptance-protocols-internal-controller',
  trigger,
  description: 'Financial denial of final acceptance protocol'
})

export const getCooperantAgreementPartialAcceptanceProtocol = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{personId}/agreement/{agreementId}/acceptance-protocol/partial/{id}',
  method: 'get',
  swaggerControllerName: 'cooperant-agreement-acceptance-protocols-internal-controller',
  trigger,
  description: 'Get partial acceptance protocol by id'
})

export const approveCooperantAgreementPartialProtocol = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{personId}/agreement/{agreementId}/acceptance-protocol/partial/{id}/approve',
  method: 'put',
  swaggerControllerName: 'cooperant-agreement-acceptance-protocols-internal-controller',
  trigger,
  description: 'Approve partial acceptance protocol'
})

export const denyCooperantAgreementPartialProtocol = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{personId}/agreement/{agreementId}/acceptance-protocol/partial/{id}/deny',
  method: 'put',
  swaggerControllerName: 'cooperant-agreement-acceptance-protocols-internal-controller',
  trigger,
  description: 'Deny partial acceptance protocol'
})

export const financialApproveCooperantAgreementPartialProtocol = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{personId}/agreement/{agreementId}/acceptance-protocol/partial/{id}/financial-approve',
  method: 'put',
  swaggerControllerName: 'cooperant-agreement-acceptance-protocols-internal-controller',
  trigger,
  description: 'Financial approval of partial acceptance protocol'
})

export const financialDenyCooperantAgreementPartialProtocol = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{personId}/agreement/{agreementId}/acceptance-protocol/partial/{id}/financial-deny',
  method: 'put',
  swaggerControllerName: 'cooperant-agreement-acceptance-protocols-internal-controller',
  trigger,
  description: 'Financial denial of partial acceptance protocol'
})

export const getCooperantAgreementAcceptanceProtocolPdf = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{personId}/agreement/{agreementId}/acceptance-protocol/{id}/pdf',
  method: 'get',
  swaggerControllerName: 'cooperant-agreement-acceptance-protocols-internal-controller',
  trigger,
  description: 'Get acceptance protocol pdf'
})

export const getCooperantAgreementAcceptanceProtocolPdfSigned = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{personId}/agreement/{agreementId}/acceptance-protocol/{id}/pdf/signed',
  method: 'get',
  swaggerControllerName: 'cooperant-agreement-acceptance-protocols-internal-controller',
  trigger,
  description: 'Get signed acceptance protocol pdf'
})

export const uploadCooperantAgreementAcceptanceProtocolPdfSigned = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{personId}/agreement/{agreementId}/acceptance-protocol/{id}/pdf/signed',
  method: 'post',
  swaggerControllerName: 'cooperant-agreement-acceptance-protocols-internal-controller',
  trigger,
  description: 'Upload signed acceptance protocol pdf'
})
