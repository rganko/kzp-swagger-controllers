import { Endpoint, Trigger } from '../utils'

export const getCooperantAgreementDetails = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{id}/agreement/{agreementId}',
  method: 'get',
  swaggerControllerName: 'cooperant-agreements-internal-controller',
  trigger,
  description: 'Get agreement details by id'
})

export const previewCooperantAgreement = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{id}/agreement/{agreementId}/preview',
  method: 'get',
  swaggerControllerName: 'cooperant-agreements-internal-controller',
  trigger,
  description: 'Previews agreement pdf file'
})

export const searchCooperantAgreements = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{id}/agreements',
  method: 'post',
  swaggerControllerName: 'cooperant-agreements-internal-controller',
  trigger,
  description: 'Search for cooperant agreements'
})
