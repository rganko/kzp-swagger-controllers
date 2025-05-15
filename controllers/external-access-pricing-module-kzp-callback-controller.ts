import { Endpoint, Trigger } from '../utils'

export const updatePricingModuleKzpLineTokenStatus = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/external/pricing/callback/project/{projectId}/kzp/position/{positionId}/line/{lineId}',
  method: 'put',
  swaggerControllerName: 'external-access-pricing-module-kzp-callback-controller',
  trigger,
  description: 'Update token for external Pricing Module in context of kzp line'
})

export const receivePricingModuleKzpLineCallback = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/external/pricing/callback/project/{projectId}/kzp/position/{positionId}/line/{lineId}',
  method: 'post',
  swaggerControllerName: 'external-access-pricing-module-kzp-callback-controller',
  trigger,
  description: 'Receives callback response from external Pricing Module'
})
