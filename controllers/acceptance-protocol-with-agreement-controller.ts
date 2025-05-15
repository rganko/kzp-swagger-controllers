import { Endpoint, Trigger } from '../utils'

export const searchAcceptanceProtocolsWithAgreement = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/acceptance-protocol/with-agreement/search',
  method: 'post',
  swaggerControllerName: 'acceptance-protocol-with-agreement-controller',
  trigger,
  description: 'Search acceptance protocols with agreement'
})
