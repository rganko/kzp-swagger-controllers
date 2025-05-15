import { Endpoint, Trigger } from '../utils'

export const downloadTechnologistLoadReport = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/report/technologist-load/download',
  method: 'post',
  swaggerControllerName: 'report-technologist-load-xls-controller',
  trigger,
  description: 'Download technologist load report in XLS format'
})
