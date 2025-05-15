import { Endpoint, Trigger } from '../utils'

export const krApproveLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/kr-approve',
  method: 'post',
  swaggerControllerName: 'kzp-line-approval-controller',
  trigger,
  description: 'KR-approving of line'
})

export const tkApproveLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/tk-approve',
  method: 'put',
  swaggerControllerName: 'kzp-line-approval-controller',
  trigger,
  description: 'TK-approving of line'
})

export const tkDisapproveLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/tk-disapprove',
  method: 'put',
  swaggerControllerName: 'kzp-line-approval-controller',
  trigger,
  description: 'TK-disapproving of line'
})

export const tpApproveLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/tp-approve',
  method: 'put',
  swaggerControllerName: 'kzp-line-approval-controller',
  trigger,
  description: 'TP-approving of line'
})

export const tpDisapproveLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/tp-disapprove',
  method: 'put',
  swaggerControllerName: 'kzp-line-approval-controller',
  trigger,
  description: 'Remove TP-approving of line'
})
