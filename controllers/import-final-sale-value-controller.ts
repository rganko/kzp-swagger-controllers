import { Endpoint, Trigger } from '../utils'

export const getImportFinalSaleValueConfig = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/import/final-sale-value/{importId}/config',
  method: 'get',
  swaggerControllerName: 'import-final-sale-value-controller',
  trigger,
  description: 'Get import final sale value config'
})

export const getImportFinalSaleValueItems = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/final-sale-value/{importId}/items/search',
  method: 'post',
  swaggerControllerName: 'import-final-sale-value-controller',
  trigger,
  description: 'Get import final sale value items'
})

export const runImportFinalSaleValue = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/final-sale-value/{importId}/run',
  method: 'put',
  swaggerControllerName: 'import-final-sale-value-controller',
  trigger,
  description: 'Run import final sale value'
})
