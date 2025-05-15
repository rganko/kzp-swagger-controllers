import { Endpoint, Trigger } from '../utils'

export const updatePricingModuleCalculationLineTokenStatus = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/external/pricing/callback/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}',
  method: 'put',
  swaggerControllerName: 'external-access-pricing-module-calculation-callback-controller',
  trigger,
  description: 'Update token for external Pricing Module in context of calculation line'
})

export const receivePricingModuleCalculationLineCallback = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/external/pricing/callback/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}',
  method: 'post',
  swaggerControllerName: 'external-access-pricing-module-calculation-callback-controller',
  trigger,
  description: 'Receives callback response from external Pricing Module'
})
