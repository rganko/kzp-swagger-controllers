import { Endpoint, Trigger } from '../utils'

export const uploadBoardResolution = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/projects/{projectId}/board-resolution',
  method: 'post',
  swaggerControllerName: 'board-resolution-controller',
  trigger,
  description: 'Upload board resolution file'
})

export const getBoardResolution = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/projects/{projectId}/board-resolution/{boardResolutionId}',
  method: 'get',
  swaggerControllerName: 'board-resolution-controller',
  trigger,
  description: 'Get board resolution item'
})

export const downloadBoardResolution = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/projects/{projectId}/board-resolution/{boardResolutionId}/download',
  method: 'get',
  swaggerControllerName: 'board-resolution-controller',
  trigger,
  description: 'Download board resolution'
})

export const deleteBoardResolution = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/projects/{projectId}/board-resolution/{boardResolutionId}',
  method: 'delete',
  swaggerControllerName: 'board-resolution-controller',
  trigger,
  description: 'Delete board resolution'
})
