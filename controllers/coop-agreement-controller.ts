import { Endpoint, Trigger } from '../utils'

export const startCoopAgreementESign = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/e-sign/start',
  method: 'post',
  swaggerControllerName: 'coop-agreement-controller',
  trigger,
  description: 'Previews agreement pdf file'
})

export const getCoopAgreement = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{id}',
  method: 'get',
  swaggerControllerName: 'coop-agreement-controller',
  trigger,
  description: 'Gets agreement by id'
})

export const getCoopAgreementBasicInfo = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/basic-info',
  method: 'get',
  swaggerControllerName: 'coop-agreement-controller',
  trigger,
  description: 'Gets agreement basic info'
})

export const generateCoopAgreementBusinessId = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/business-id',
  method: 'get',
  swaggerControllerName: 'coop-agreement-controller',
  trigger,
  description: 'Generate business id for agreement'
})

export const getCoopAgreementChangeHistory = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/change-history',
  method: 'get',
  swaggerControllerName: 'coop-agreement-controller',
  trigger,
  description: 'Gets agreement change history'
})

export const getCoopAgreementChanges = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/changes',
  method: 'get',
  swaggerControllerName: 'coop-agreement-controller',
  trigger,
  description: 'Gets agreement changes'
})

export const previewCoopAgreementDocument = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/document/preview',
  method: 'get',
  swaggerControllerName: 'coop-agreement-controller',
  trigger,
  description: 'Preview agreement document'
})

export const downloadCoopAgreementDocument = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/document/{documentId}/download',
  method: 'get',
  swaggerControllerName: 'coop-agreement-controller',
  trigger,
  description: 'Download agreement document'
})

export const getCoopAgreementDocument = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/document/{documentId}',
  method: 'get',
  swaggerControllerName: 'coop-agreement-controller',
  trigger,
  description: 'Get agreement document'
})

export const getCoopAgreementDocuments = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/documents',
  method: 'get',
  swaggerControllerName: 'coop-agreement-controller',
  trigger,
  description: 'Get agreement documents'
})

export const getCoopAgreementESignEndpoint = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/e-sign',
  method: 'get',
  swaggerControllerName: 'coop-agreement-controller',
  trigger,
  description: 'Gets e-sign endpoint for agreement'
})

export const getCoopAgreementESignStatus = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/e-sign/status',
  method: 'get',
  swaggerControllerName: 'coop-agreement-controller',
  trigger,
  description: 'Gets agreement e-sign status'
})

export const updateCoopAgreementESignStatus = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/e-sign/status',
  method: 'put',
  swaggerControllerName: 'coop-agreement-controller',
  trigger,
  description: 'Updates agreement e-sign status'
})

export const getCoopAgreementInfo = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/info',
  method: 'get',
  swaggerControllerName: 'coop-agreement-controller',
  trigger,
  description: 'Gets agreement info'
})

export const getCoopAgreementParentDocument = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/parent/document',
  method: 'get',
  swaggerControllerName: 'coop-agreement-controller',
  trigger,
  description: 'Gets parent agreement document'
})

export const getCoopAgreementProtocols = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/protocols',
  method: 'get',
  swaggerControllerName: 'coop-agreement-controller',
  trigger,
  description: 'Gets agreement protocols'
})

export const searchCoopAgreements = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/search',
  method: 'post',
  swaggerControllerName: 'coop-agreement-controller',
  trigger,
  description: 'Search agreements'
})
