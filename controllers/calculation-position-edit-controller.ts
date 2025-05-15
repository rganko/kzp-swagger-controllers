import { Endpoint, Trigger } from '../utils'

export const editCalculationPosition = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}',
  method: 'put',
  swaggerControllerName: 'calculation-position-edit-controller',
  trigger,
  description: 'Edits calculation position'
})

export const editCalculationPositionActive = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/active',
  method: 'put',
  swaggerControllerName: 'calculation-position-edit-controller',
  trigger,
  description: 'Edits activeness of calculation position'
})

export const editCalculationPositionApproval = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/approval',
  method: 'put',
  swaggerControllerName: 'calculation-position-edit-controller',
  trigger,
  description: 'Edits calculation position approval'
})

export const editCalculationPositionDepartment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/department',
  method: 'put',
  swaggerControllerName: 'calculation-position-edit-controller',
  trigger,
  description: 'Edits calculation position department'
})

export const editCalculationPositionDescription = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/description',
  method: 'put',
  swaggerControllerName: 'calculation-position-edit-controller',
  trigger,
  description: 'Edits calculation position description'
})

export const editCalculationPositionInvoice = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/invoice',
  method: 'put',
  swaggerControllerName: 'calculation-position-edit-controller',
  trigger,
  description: 'Edits calculation position invoice'
})

export const editCalculationPositionMpk = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/mpk',
  method: 'put',
  swaggerControllerName: 'calculation-position-edit-controller',
  trigger,
  description: 'Edits calculation position mpk'
})

export const editCalculationPositionNumber = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/number',
  method: 'put',
  swaggerControllerName: 'calculation-position-edit-controller',
  trigger,
  description: 'Edits calculation position number'
})

export const editCalculationPositionRemarks = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/remarks',
  method: 'put',
  swaggerControllerName: 'calculation-position-edit-controller',
  trigger,
  description: 'Edits calculation position remarks'
})

export const editCalculationPositionResponsiblePerson = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/responsible-person',
  method: 'put',
  swaggerControllerName: 'calculation-position-edit-controller',
  trigger,
  description: 'Edits calculation position responsible person'
})

export const editCalculationPositionSale = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/sale',
  method: 'put',
  swaggerControllerName: 'calculation-position-edit-controller',
  trigger,
  description: 'Edits calculation position sale'
})

export const editCalculationPositionSummary = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/summary',
  method: 'put',
  swaggerControllerName: 'calculation-position-edit-controller',
  trigger,
  description: 'Edits calculation position summary'
})

export const editCalculationPositionTechnician = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/technician',
  method: 'put',
  swaggerControllerName: 'calculation-position-edit-controller',
  trigger,
  description: 'Edits calculation position technician'
})

export const editCalculationPositionType = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/calculation/{calculationId}/position/{positionId}/type',
  method: 'put',
  swaggerControllerName: 'calculation-position-edit-controller',
  trigger,
  description: 'Edits calculation position type'
})
