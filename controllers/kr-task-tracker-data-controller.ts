import { Endpoint, Trigger } from '../utils'

export const startKrTaskTrackerDataRefresh = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/kr-task-tracker-data',
  method: 'post',
  swaggerControllerName: 'kr-task-tracker-data-controller',
  trigger,
  description: 'Start KrTaskTrackerDataJob to refresh data'
})

export const getNewestKrTaskTrackerData = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/kr-task-tracker-data/newest',
  method: 'get',
  swaggerControllerName: 'kr-task-tracker-data-controller',
  trigger,
  description: 'Get newest KrTaskTrackerData'
})
