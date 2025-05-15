import { Endpoint, Trigger } from '../utils'

export const getAllErrorMessages = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/error-messages',
  method: 'get',
  swaggerControllerName: 'error-messages-controller',
  trigger,
  description: 'Get all validation error messages'
})

export const getCommonErrorMessages = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/error-messages/common',
  method: 'get',
  swaggerControllerName: 'error-messages-controller',
  trigger,
  description: 'Get all common validation error messages'
})

export const getWarningMessages = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/error-messages/warnings',
  method: 'get',
  swaggerControllerName: 'error-messages-controller',
  trigger,
  description: 'Get all validation warning messages'
})
