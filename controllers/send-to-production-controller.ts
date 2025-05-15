import { Endpoint, Trigger } from '../utils'

export const sendToProduction = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/send-to-production/import/{importId}/project/{projectId}/calculation/{calculationId}',
  method: 'put',
  swaggerControllerName: 'send-to-production-controller',
  trigger,
  description: 'Sends project calculation to production',
})
