import { Endpoint, Trigger } from '../utils'

export const downloadExecutedOfferReport = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/report/executed-offer/project/{projectId}/download',
  method: 'post',
  swaggerControllerName: 'report-executed-offer-xls-controller',
  trigger,
  description: 'Download executed offer report in XLS format'
})
