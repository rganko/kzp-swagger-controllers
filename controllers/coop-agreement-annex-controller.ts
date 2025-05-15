import { Endpoint, Trigger } from '../utils'

export const createCoopAgreementAnnex = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/annex',
  method: 'post',
  swaggerControllerName: 'coop-agreement-annex-controller',
  trigger,
  description: 'Creates annex for agreement'
})

export const generateCoopAgreementAnnexBusinessId = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/annex/probably-business-id',
  method: 'get',
  swaggerControllerName: 'coop-agreement-annex-controller',
  trigger,
  description: 'Generate probably business id for agreement'
})
