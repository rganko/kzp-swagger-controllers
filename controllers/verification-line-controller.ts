import { Endpoint, Trigger } from '../utils'

export const getVerificationLine = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/verification/position/{positionId}/line/{id}',
  method: 'get',
  swaggerControllerName: 'verification-line-controller',
  trigger,
  description: 'Get verification line by id',
})

export const updateVerificationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/verification/position/{positionId}/line/{id}',
  method: 'put',
  swaggerControllerName: 'verification-line-controller',
  trigger,
  description: 'Update verification line by id',
})

export const deleteVerificationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/verification/position/{positionId}/line/{id}',
  method: 'delete',
  swaggerControllerName: 'verification-line-controller',
  trigger,
  description: 'Removes verification line',
})

export const twDisapproveVerificationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/verification/position/{positionId}/line/{id}/tw-disapprove',
  method: 'put',
  swaggerControllerName: 'verification-line-controller',  
  trigger,
  description: 'TW-Disapprove verification line',
})

export const twApproveVerificationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/verification/position/{positionId}/line/{id}/tw-approve',
  method: 'put',
  swaggerControllerName: 'verification-line-controller',
  trigger,
  description: 'TW-Approve verification line',
})
