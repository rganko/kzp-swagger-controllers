import { Endpoint, Trigger } from '../utils'

export const addCalculation = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation',
  method: 'post',
  swaggerControllerName: 'calculation-controller',
  trigger,
  description: 'Adds calculation to a project'
})

export const getCalculation = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}',
  method: 'get',
  swaggerControllerName: 'calculation-controller',
  trigger,
  description: 'Gets project calculation'
})

export const getCalculationMappers = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/mappers',
  method: 'get',
  swaggerControllerName: 'calculation-controller',
  trigger,
  description: 'Gets project calculation mappers'
})

export const getCalculationStatistics = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/statistics',
  method: 'get',
  swaggerControllerName: 'calculation-controller',
  trigger,
  description: 'Gets project calculation statistics'
})

export const getCalculationSummaries = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/summaries',
  method: 'get',
  swaggerControllerName: 'calculation-controller',
  trigger,
  description: 'Gets project calculation summaries'
})

export const getProjectCalculation = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/project',
  method: 'get',
  swaggerControllerName: 'calculation-controller',
  trigger,
  description: 'Get project calculation'
})

export const searchCalculations = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/search',
  method: 'post',
  swaggerControllerName: 'calculation-controller',
  trigger,
  description: 'Search project calculations'
})

export const updateCalculationMappers = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/mappers',
  method: 'put',
  swaggerControllerName: 'calculation-controller',
  trigger,
  description: 'Updates project calculation mappers'
})

export const updateCalculationName = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/name',
  method: 'put',
  swaggerControllerName: 'calculation-controller',
  trigger,
  description: 'Updates project calculation name'
})
