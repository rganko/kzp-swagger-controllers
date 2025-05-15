import { Endpoint, Trigger } from '../utils'

export const getProject = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}',
  method: 'get',
  swaggerControllerName: 'project-controller',
  trigger,
  description: 'Gets project',
})

export const editProject = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}',
  method: 'put', 
  swaggerControllerName: 'project-controller',
  trigger,
  description: 'Edits existing project',
})

export const removeProject = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}',
  method: 'delete',
  swaggerControllerName: 'project-controller',
  trigger,
  description: 'Remove existing project',
})

export const terminateProject = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/terminate',
  method: 'put',
  swaggerControllerName: 'project-controller',
  trigger,
  description: 'Terminate project at calculation phase - set flag true',
})

export const resumeProject = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/resume',
  method: 'put',
  swaggerControllerName: 'project-controller',
  trigger,
  description: 'Unarchive project',
})
