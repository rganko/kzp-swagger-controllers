import { Endpoint, Trigger } from '../utils'

export const sendLineToCooperationDepartment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{kzpPositionId}/line/{kzpLineId}/cooperation/send',
  method: 'post',
  swaggerControllerName: 'kzp-line-cooperation-controller',
  trigger,
  description: 'Sends given line to be processed by the cooperation department'
})

export const sendMultipleLinesToCooperationDepartment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{kzpPositionId}/line/cooperation/send',
  method: 'post',
  swaggerControllerName: 'kzp-line-cooperation-controller',
  trigger,
  description: 'Sends given line to be processed by the cooperation department'
})
