import { Endpoint, Trigger } from '../utils'

export const synchronizeMobileInspectionData = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/internal/mobile/inspection/sync',
  method: 'post',
  swaggerControllerName: 'mobile-inspection-sync-internal-controller',
  trigger,
  description: 'Synchronize mobile inspection data'
})
