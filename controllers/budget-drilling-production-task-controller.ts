import { Endpoint, Trigger } from '../utils'

export const getBudgetDrillingProductionTaskFromBudgetRoot = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/drilling/production-task/from-budget-root',
  method: 'post',
  swaggerControllerName: 'budget-drilling-production-task-controller',
  trigger,
  description: 'Get drilling data about production task with mpk from budgetRoot'
})

export const getBudgetDrillingProductionTaskFromExternalSystem = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/drilling/production-task/from-external-system',
  method: 'post',
  swaggerControllerName: 'budget-drilling-production-task-controller',
  trigger,
  description: 'Get drilling data about production task where mpk not found in kzp'
})

export const getBudgetDrillingProductionTaskFromKzp = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/drilling/production-task/from-kzp',
  method: 'post',
  swaggerControllerName: 'budget-drilling-production-task-controller',
  trigger,
  description: 'Get drilling data about production task from kzp'
})

export const getBudgetDrillingProductionTaskFromPosition = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/drilling/production-task/from-position',
  method: 'post',
  swaggerControllerName: 'budget-drilling-production-task-controller',
  trigger,
  description: 'Get drilling data about production task with position'
})

export const getBudgetDrillingProductionTaskFromSnapshotRoot = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/drilling/production-task/from-snapshot-root',
  method: 'post',
  swaggerControllerName: 'budget-drilling-production-task-controller',
  trigger,
  description: 'Get drilling data about production task with mpk from snapshotRoot'
})
