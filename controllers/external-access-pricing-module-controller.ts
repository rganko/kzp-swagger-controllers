import { Endpoint, Trigger } from '../utils'

export const getPricingModuleTokenStatus = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/external/pricing/{id}/token-status',
  method: 'get',
  swaggerControllerName: 'external-access-pricing-module-controller',
  trigger,
  description: 'Get token status'
})

export const createPricingModuleTokenForCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/external/pricing/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}',
  method: 'post',
  swaggerControllerName: 'external-access-pricing-module-controller',
  trigger,
  description: 'Creates token for external Pricing Module in context of calculation line'
})

export const createPricingModuleTokenForKzpLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/external/pricing/project/{projectId}/kzp/position/{positionId}/line/{lineId}',
  method: 'post',
  swaggerControllerName: 'external-access-pricing-module-controller',
  trigger,
  description: 'Creates token for external Pricing Module in context of KZP line'
})

export const createPricingModuleTokenForVerificationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/external/pricing/project/{projectId}/verification/position/{positionId}/line/{lineId}',
  method: 'post',
  swaggerControllerName: 'external-access-pricing-module-controller',
  trigger,
  description: 'Creates token for external Pricing Module in context of verification line'
})
