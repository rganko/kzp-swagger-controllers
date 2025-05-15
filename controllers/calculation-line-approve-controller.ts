import { Endpoint, Trigger } from '../utils'

export const krApproveCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}/kr-approve',
  method: 'put',
  swaggerControllerName: 'calculation-line-approve-controller',
  trigger,
  description: 'KR-approving of line'
})

export const krDisapproveCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}/kr-disapprove',
  method: 'put',
  swaggerControllerName: 'calculation-line-approve-controller',
  trigger,
  description: 'Remove KR-approving of line'
})

export const ptApproveCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}/pt-approve',
  method: 'put',
  swaggerControllerName: 'calculation-line-approve-controller',
  trigger,
  description: 'PT-approving of line'
})

export const ptDisapproveCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}/pt-disapprove',
  method: 'put',
  swaggerControllerName: 'calculation-line-approve-controller',
  trigger,
  description: 'Remove PT-approving of line'
})

export const ztApproveCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}/zt-approve',
  method: 'put',
  swaggerControllerName: 'calculation-line-approve-controller',
  trigger,
  description: 'ZT-approving of line'
})

export const ztDisapproveCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}/zt-disapprove',
  method: 'put',
  swaggerControllerName: 'calculation-line-approve-controller',
  trigger,
  description: 'Remove ZT-approving of line'
})
