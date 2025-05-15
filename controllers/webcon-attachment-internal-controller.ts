import { Endpoint, Trigger } from '../utils'

export const getWebconAttachmentInternal = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/internal/webcon/attachment/{attachmentId}',
  method: 'get',
  swaggerControllerName: 'webcon-attachment-internal-controller',
  trigger,
  description: 'Get Webcon attachment internal'
})
