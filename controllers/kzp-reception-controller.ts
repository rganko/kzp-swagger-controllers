import { Endpoint, Trigger } from '../utils'

export const editKzpLineAcceptanceStatus = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/reception/line/{kzpLineId}/acceptance-status/edit',
  method: 'put',
  swaggerControllerName: 'kzp-reception-controller',
  trigger,
  description: 'Edit KZP line acceptance status'
})

export const editKzpLineDepartmentReception = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/reception/line/{kzpLineId}/department/edit',
  method: 'put',
  swaggerControllerName: 'kzp-reception-controller',
  trigger,
  description: 'Edit KZP line acceptance'
})

export const bulkDepartmentReceptionLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/reception/line/department',
  method: 'put',
  swaggerControllerName: 'kzp-reception-controller',
  trigger,
  description: 'Bulk KZP line reception by department'
})

export const bulkQualityControlReceptionLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/reception/line/quality-control',
  method: 'put',
  swaggerControllerName: 'kzp-reception-controller',
  trigger,
  description: 'Bulk KZP line reception by quality control'
})
