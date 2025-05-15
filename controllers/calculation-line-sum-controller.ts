import { Endpoint, Trigger } from '../utils'

export const getCalculationLineMaterialSum = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}/sum/material',
  method: 'get',
  swaggerControllerName: 'calculation-line-sum-controller',
  trigger,
  description: 'Calculate material sum assigned to calculation line'
})

export const getCalculationLineMaterialSumPerCurrency = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}/sum/material-per-currency',
  method: 'get',
  swaggerControllerName: 'calculation-line-sum-controller',
  trigger,
  description: 'Calculate material sum assigned to calculation line per currency'
})

export const getCalculationLineSum = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}/sum',
  method: 'get',
  swaggerControllerName: 'calculation-line-sum-controller',
  trigger,
  description: 'Calculate sum assigned to calculation line'
})
