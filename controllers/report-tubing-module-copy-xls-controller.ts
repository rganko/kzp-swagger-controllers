import { Endpoint, Trigger } from '../utils'

export const downloadTubingModuleCopyReport = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/report/project/{projectId}/tubing-module-copy/download',
  method: 'get',
  swaggerControllerName: 'report-tubing-module-copy-xls-controller',
  trigger,
  description: 'Download tubing module copy report in XLS format'
})
