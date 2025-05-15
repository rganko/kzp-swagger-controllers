import { Endpoint, Trigger } from '../utils'

export const getHullResourceExecutorList = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/hull-resource-executor/list',
  method: 'get',
  swaggerControllerName: 'hull-resource-executor-controller',
  trigger,
  description: 'Get hull resource executors'
})

export const getHullResourceDefaultExecutorForProject = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/hull-resource-executor/project/{projectId}',
  method: 'get',
  swaggerControllerName: 'hull-resource-executor-controller',
  trigger,
  description: 'Get hull resource default executor for project'
})

export const changeHullResourceDefaultExecutorForProject = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/hull-resource-executor/project/{projectId}/department/{departmentId}',
  method: 'put',
  swaggerControllerName: 'hull-resource-executor-controller',
  trigger,
  description: 'Change hull resource default executor for project'
})
