import { Endpoint, Trigger } from '../utils'

export const createCooperant = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperant',
  method: 'post',
  swaggerControllerName: 'cooperant-controller',
  trigger,
  description: 'Adds new cooperant'
})

export const getCooperantById = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperant/{id}',
  method: 'get',
  swaggerControllerName: 'cooperant-controller',
  trigger,
  description: 'Gets cooperant by ID'
})

export const updateCooperant = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperant/{id}',
  method: 'put',
  swaggerControllerName: 'cooperant-controller',
  trigger,
  description: 'Updates cooperant'
})

export const activateCooperant = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperant/{id}/activate',
  method: 'put',
  swaggerControllerName: 'cooperant-controller',
  trigger,
  description: 'Activate cooperant'
})

export const addCooperantAttachment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperant/{id}/attachment',
  method: 'post',
  swaggerControllerName: 'cooperant-controller',
  trigger,
  description: 'Add cooperant attachment'
})

export const getCooperantAttachments = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperant/{id}/attachments',
  method: 'get',
  swaggerControllerName: 'cooperant-controller',
  trigger,
  description: 'Get cooperant attachments'
})

export const getCooperantByPersonId = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperant/by-person/{id}',
  method: 'get',
  swaggerControllerName: 'cooperant-controller',
  trigger,
  description: 'Gets cooperant by person ID'
})

export const deactivateCooperant = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperant/{id}/deactivate',
  method: 'put',
  swaggerControllerName: 'cooperant-controller',
  trigger,
  description: 'Deactivate cooperant'
})

export const downloadCooperantAttachment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperant/{cooperantId}/attachment/{id}/download',
  method: 'get',
  swaggerControllerName: 'cooperant-controller',
  trigger,
  description: 'Download cooperant attachment'
})

export const removeCooperantAttachment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperant/{cooperantId}/attachment/{id}',
  method: 'delete',
  swaggerControllerName: 'cooperant-controller',
  trigger,
  description: 'Remove cooperant attachment'
})

export const searchCooperants = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperant/search',
  method: 'post',
  swaggerControllerName: 'cooperant-controller',
  trigger,
  description: 'Search cooperants'
})

export const signCooperantAgreement = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperant/{id}/sign',
  method: 'put',
  swaggerControllerName: 'cooperant-controller',
  trigger,
  description: 'Sign cooperant agreement'
})

export const verifyCooperant = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperant/{id}/verify',
  method: 'put',
  swaggerControllerName: 'cooperant-controller',
  trigger,
  description: 'Verify cooperant'
})
