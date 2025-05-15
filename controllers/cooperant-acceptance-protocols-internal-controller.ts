import { Endpoint, Trigger } from '../utils'

export const searchCooperantAcceptanceProtocolsWithAgreement = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{cooperantPersonId}/acceptance-protocols/with-agreement/search',
  method: 'post',
  swaggerControllerName: 'cooperant-acceptance-protocols-internal-controller',
  trigger,
  description: 'Search protocols with agreement by cooperant person'
})
