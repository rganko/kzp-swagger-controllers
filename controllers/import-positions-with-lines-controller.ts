import { Endpoint, Trigger } from '../utils'

export const getImportPositionsWithLinesConfig = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/import/positions-with-lines/{importId}/config',
  method: 'get',
  swaggerControllerName: 'import-positions-with-lines-controller',
  trigger,
  description: 'Get import positions with lines config'
})

export const editImportPosition = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/positions-with-lines/{importId}/positions/{positionId}',
  method: 'put',
  swaggerControllerName: 'import-positions-with-lines-controller',
  trigger,
  description: 'Edit import position'
})

export const editImportLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/positions-with-lines/{importId}/positions/{positionId}/lines/{lineId}',
  method: 'put',
  swaggerControllerName: 'import-positions-with-lines-controller',
  trigger,
  description: 'Edit import line'
})

export const getImportLines = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/positions-with-lines/{importId}/positions/{positionId}/lines/search',
  method: 'post',
  swaggerControllerName: 'import-positions-with-lines-controller',
  trigger,
  description: 'Get import lines'
})

export const getImportPositions = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/positions-with-lines/{importId}/positions/search',
  method: 'post',
  swaggerControllerName: 'import-positions-with-lines-controller',
  trigger,
  description: 'Get import positions'
})

export const getImportPositionsWithLines = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/positions-with-lines/{importId}/positions/search/v2',
  method: 'post',
  swaggerControllerName: 'import-positions-with-lines-controller',
  trigger,
  description: 'Get import positions with lines'
})

export const runImportPositionsWithLines = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/positions-with-lines/{importId}/run',
  method: 'put',
  swaggerControllerName: 'import-positions-with-lines-controller',
  trigger,
  description: 'Run import positions with lines'
})

export const prepareImportPositionsWithLines = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/positions-with-lines/project/{projectId}/calculation/{calculationId}',
  method: 'post',
  swaggerControllerName: 'import-positions-with-lines-controller',
  trigger,
  description: 'Prepare import positions with lines based on the file'
})

export const searchPositionsWithLinesImports = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/positions-with-lines/project/{projectId}/search',
  method: 'post',
  swaggerControllerName: 'import-positions-with-lines-controller',
  trigger,
  description: 'Search position with lines imports'
})
