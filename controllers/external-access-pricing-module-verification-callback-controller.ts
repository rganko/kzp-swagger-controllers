import { Endpoint, Trigger } from '../utils'

export const updatePricingModuleVerificationLineTokenStatus = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/external/pricing/callback/project/{projectId}/verification/position/{positionId}/line/{lineId}',
  method: 'put',
  swaggerControllerName: 'external-access-pricing-module-verification-callback-controller',
  trigger,
  description: 'Update token for external Pricing Module in context of verification line'
})

export const receivePricingModuleVerificationLineCallback = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/external/pricing/callback/project/{projectId}/verification/position/{positionId}/line/{lineId}',
  method: 'post',
  swaggerControllerName: 'external-access-pricing-module-verification-callback-controller',
  trigger,
  description: 'Receives callback response from external Pricing Module'
})
