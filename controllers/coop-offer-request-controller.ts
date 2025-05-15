import { Endpoint, Trigger } from '../utils'

export const getCoopOfferRequest = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/{id}',
  method: 'get',
  swaggerControllerName: 'coop-offer-request-controller',
  trigger,
  description: 'Gets offer request'
})

export const updateCoopOfferRequest = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/{id}',
  method: 'put',
  swaggerControllerName: 'coop-offer-request-controller',
  trigger,
  description: 'Updates offer request'
})

export const approveCoopOfferRequest = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/{id}/approve',
  method: 'put',
  swaggerControllerName: 'coop-offer-request-controller',
  trigger,
  description: 'Approve offer request'
})

export const createCoopOfferRequest = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/create',
  method: 'post',
  swaggerControllerName: 'coop-offer-request-controller',
  trigger,
  description: 'Creates offer request'
})

export const deleteCoopOfferRequest = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/{id}/delete',
  method: 'delete',
  swaggerControllerName: 'coop-offer-request-controller',
  trigger,
  description: 'Delete offer request'
})

export const getCoopOfferRequestFiles = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/{id}/files',
  method: 'get',
  swaggerControllerName: 'coop-offer-request-controller',
  trigger,
  description: 'Get files under offer request'
})

export const getCoopOfferRequestNextPendingMessage = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/{id}/message/next-pending',
  method: 'get',
  swaggerControllerName: 'coop-offer-request-controller',
  trigger,
  description: 'Get next pending message for offer request'
})

export const markCoopOfferRequestAsSent = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/{id}/mark-sent',
  method: 'put',
  swaggerControllerName: 'coop-offer-request-controller',
  trigger,
  description: 'Mark offer request as sent'
})

export const publishCoopOfferRequest = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/{id}/publish',
  method: 'put',
  swaggerControllerName: 'coop-offer-request-controller',
  trigger,
  description: 'Publish offer request'
})

export const searchCoopOfferRequests = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/search',
  method: 'post',
  swaggerControllerName: 'coop-offer-request-controller',
  trigger,
  description: 'Search for offer requests'
})

export const validateCoopOfferRequest = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/{id}/validate',
  method: 'get',
  swaggerControllerName: 'coop-offer-request-controller',
  trigger,
  description: 'Validate offer request'
})
