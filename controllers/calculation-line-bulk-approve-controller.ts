import { Endpoint, Trigger } from '../utils'

export const bulkTkApproveCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/tk-approve',
  method: 'put',
  swaggerControllerName: 'calculation-line-bulk-approve-controller',
  trigger,
  description: 'Bulk TK-approving of line'
})

export const bulkTpApproveCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/tp-approve',
  method: 'put',
  swaggerControllerName: 'calculation-line-bulk-approve-controller',
  trigger,
  description: 'Bulk TP-approving of line'
})
