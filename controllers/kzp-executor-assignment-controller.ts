import { Endpoint, Trigger } from '../utils'

export const setUnapprovedExecutor = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/executor-assignment/line',
  method: 'put',
  swaggerControllerName: 'kzp-executor-assignment-controller',
  trigger,
  description: 'Set lines unapproved executor assignment'
})

export const bulkApproveExecutorAssignment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/executor-assignment/line/approve',
  method: 'post',
  swaggerControllerName: 'kzp-executor-assignment-controller',
  trigger,
  description: 'Bulk approves KZP lines - unapproved executor assignment'
})

export const clearUnapprovedExecutorAssignment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/executor-assignment/line/clear-unapproved',
  method: 'put',
  swaggerControllerName: 'kzp-executor-assignment-controller',
  trigger,
  description: 'Clears lines unapproved executor assignment'
})

export const searchLinesToSetExecutor = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/executor-assignment/line/search',
  method: 'post',
  swaggerControllerName: 'kzp-executor-assignment-controller',
  trigger,
  description: 'Gets lines to set executor'
})

export const getUnapprovedExecutorAssignmentSum = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/executor-assignment/line/search/sum',
  method: 'post',
  swaggerControllerName: 'kzp-executor-assignment-controller',
  trigger,
  description: 'Gets sum for lines to set executor'
})

export const setCooperationExecutorForMultipleLines = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/executor-assignment/line/set-cooperation',
  method: 'post',
  swaggerControllerName: 'kzp-executor-assignment-controller',
  trigger,
  description: 'Replaces KZP cooperation data for multiple lines'
})

export const setCooperationExecutorForMultipleLinesByImport = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/executor-assignment/line/set-cooperation/import',
  method: 'post',
  swaggerControllerName: 'kzp-executor-assignment-controller',
  trigger,
  description: 'Replaces KZP cooperation data for multiple lines by import'
})

export const setLineExecutionData = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/executor-assignment/position/{kzpPositionId}/line/{kzpLineId}',
  method: 'put',
  swaggerControllerName: 'kzp-executor-assignment-controller',
  trigger,
  description: 'Set line execution data'
})

export const approveExecutorAssignment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/executor-assignment/position/{kzpPositionId}/line/{kzpLineId}/approve',
  method: 'post',
  swaggerControllerName: 'kzp-executor-assignment-controller',
  trigger,
  description: 'Approves KZP line unapproved executor assignment'
})

export const getCooperationData = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/executor-assignment/position/{kzpPositionId}/line/{kzpLineId}/cooperation',
  method: 'get',
  swaggerControllerName: 'kzp-executor-assignment-controller',
  trigger,
  description: 'Gets KZP cooperation data'
})

export const returnKzpLineFromInternalCooperation = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/executor-assignment/position/{kzpPositionId}/line/{kzpLineId}/return-from-internal-cooperation',
  method: 'put',
  swaggerControllerName: 'kzp-executor-assignment-controller',
  trigger,
  description: 'Return KZP line from internal cooperation'
})

export const searchPositionsToSetExecutor = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/executor-assignment/position/search',
  method: 'post',
  swaggerControllerName: 'kzp-executor-assignment-controller',
  trigger,
  description: 'Gets positions to set executor'
})
