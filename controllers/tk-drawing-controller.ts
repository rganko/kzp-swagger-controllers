import { Endpoint, Trigger } from '../utils'

export const getTkDrawing = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/tk-drawing/{tkDrawingId}',
  method: 'get',
  swaggerControllerName: 'tk-drawing-controller',
  trigger,
  description: 'Get TK drawing'
})

export const uploadTkDrawing = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/tk-drawing',
  method: 'post',
  swaggerControllerName: 'tk-drawing-controller',
  trigger,
  description: 'Upload TK drawing'
})

export const deleteTkDrawing = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/tk-drawing/{tkDrawingId}',
  method: 'delete',
  swaggerControllerName: 'tk-drawing-controller',
  trigger,
  description: 'Delete TK drawing'
})
