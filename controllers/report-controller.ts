import { Endpoint, Trigger } from '../utils'

export const getReportList = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/report/list',
  method: 'get',
  swaggerControllerName: 'report-controller',
  trigger,
  description: 'Get report list'
})

export const downloadReport = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/report/{id}/download',
  method: 'get',
  swaggerControllerName: 'report-controller',
  trigger,
  description: 'Download report'
})
