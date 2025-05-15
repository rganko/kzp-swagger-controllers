import { Endpoint, Trigger } from '../utils'

export const getImportSaleCostKzpValueItems = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/sale-cost/project/{projectId}/kzp/{importId}/items/search',
  method: 'post',
  swaggerControllerName: 'import-sale-cost-kzp-controller',
  trigger,
  description: 'Get import sale cost kzp value items'
})

export const runImportSaleCostUnderKzp = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/sale-cost/project/{projectId}/kzp/{importId}/run',
  method: 'post',
  swaggerControllerName: 'import-sale-cost-kzp-controller',
  trigger,
  description: 'Run import sale cost under kzp'
})

export const prepareImportSaleCostForKzp = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/sale-cost/project/{projectId}/kzp/prepare',
  method: 'post',
  swaggerControllerName: 'import-sale-cost-kzp-controller',
  trigger,
  description: 'Prepare import for sale cost for kzp'
})
