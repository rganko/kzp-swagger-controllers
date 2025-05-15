import { Endpoint, Trigger } from '../utils'

export const getVerificationKzpLineThread = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/verification/kzp-line/{kzpLineId}/thread',
  method: 'get',
  swaggerControllerName: 'verification-kzp-line-thread-controller',
  trigger,
  description: 'Get verification KZP line thread'
})
