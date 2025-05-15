import { Endpoint, Trigger } from '../utils'

export const getTkChangeCardApprover = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/tk-change-card/project/{projectId}/approver',
  method: 'get',
  swaggerControllerName: 'tk-change-card-approver-controller',
  trigger,
  description: 'Get TK change card approver'
})
