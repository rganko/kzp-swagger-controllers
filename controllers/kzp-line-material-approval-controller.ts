import { Endpoint, Trigger } from '../utils'

export const krApproveMaterial = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/material-kr-approve',
  method: 'post',
  swaggerControllerName: 'kzp-line-material-approval-controller',
  trigger,
  description: 'Material KR-approving of line'
})

export const tkApproveMaterial = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/material-tk-approve', 
  method: 'put',
  swaggerControllerName: 'kzp-line-material-approval-controller',
  trigger,
  description: 'Material TK-approving of line'
})

export const tkDisapproveMaterial = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/material-tk-disapprove',
  method: 'put',
  swaggerControllerName: 'kzp-line-material-approval-controller', 
  trigger,
  description: 'Material TK-disapproving of line'
})

export const tpApproveMaterial = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/material-tp-approve',
  method: 'put',
  swaggerControllerName: 'kzp-line-material-approval-controller',
  trigger,
  description: 'Material TP-approving of line'  
})

export const tpDisapproveMaterial = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/material-tp-disapprove',
  method: 'put',
  swaggerControllerName: 'kzp-line-material-approval-controller',
  trigger, 
  description: 'Material TP-disapproving of line'
})
