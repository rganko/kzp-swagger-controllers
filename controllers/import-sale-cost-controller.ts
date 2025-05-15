import { Endpoint, Trigger } from '../utils'

export const prepareImportSaleCostForCalculation = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/sale-cost/project/{projectId}/calculation/{calculationId}',
  method: 'post',
  swaggerControllerName: 'import-sale-cost-controller',
  trigger,
  description: 'Prepare import for sale cost for calculation'
})

export const getImportSaleCostValueItems = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/sale-cost/project/{projectId}/calculation/{calculationId}/{importId}/items/search',
  method: 'post',
  swaggerControllerName: 'import-sale-cost-controller',
  trigger,
  description: 'Get import sale cost value items'
})

export const runImportSaleCostUnderCalculation = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/sale-cost/project/{projectId}/calculation/{calculationId}/{importId}/run',
  method: 'post',
  swaggerControllerName: 'import-sale-cost-controller',
  trigger,
  description: 'Run import sale cost under calculation'
})
