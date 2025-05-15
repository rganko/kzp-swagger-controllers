import { Endpoint, Trigger } from '../utils'

export const importCalculationPositions = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/import-batch',
  method: 'post',
  swaggerControllerName: 'calculation-position-import-controller',
  trigger,
  description: 'Parses excel file and returns its content'
})

export const parseCalculationPositionsExcel = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/calculation/position/import/parse-excel',
  method: 'post',
  swaggerControllerName: 'calculation-position-import-controller',
  trigger,
  description: 'Parses excel file and returns its content'
})
