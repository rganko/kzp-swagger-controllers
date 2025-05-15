import { Endpoint, Trigger } from '../utils'

export const generateGsrAdditionalObjectsReportForCalculationLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/ADDITIONAL_OBJECTS/project/{projectId}/calculation-line/{lineId}',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for additional objects for calculation line'
})

export const generateGsrAdditionalObjectsReportForKzpLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/ADDITIONAL_OBJECTS/project/{projectId}/kzp-line/{lineId}',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for additional objects for kzp line'
})

export const generateGsrReportForApprovedLinesInKzp = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/APPROVED_LINES_IN_KZP/project/{projectId}',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for approved lines in KZP'
})

export const generateGsrReportForApprovedPositionsByTechnologistsInKzp = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/APPROVED_POSITIONS_BY_TECHNOLOGISTS_IN_KZP',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for approved positions by technologists in KZP'
})

export const generateGsrReportForApprovedPositionsByTechnologistOnOffers = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/APPROVED_POSITIONS_BY_TECHNOLOGISTS_ON_OFFERS',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for approved positions by technologist on offers'
})

export const generateGsrReportForBudgetPerDate = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/BUDGET_PER_DATE',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for budget per date'
})

export const generateGsrReportForChangelog = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/CHANGELOG',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for changelog'
})

export const generateGsrReportForComparationSaleAmountOfAcceptedOffer = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/COMPARATION_SALE_AMOUNT_OF_ACCEPTED_OFFER',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for comparation sale amount of the accepted offer by project'
})

export const generateGsrReportForDepartmentCoverageByPositions = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/DEPARTMENT_COVERAGE_BY_POSITIONS',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for department coverage by positions'
})

export const generateGsrReportForEnergyFactorsByProject = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/ENERGY_FACTORS_BY_PROJECT',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for energy factors by project'
})

export const generateGsrReportForEnergyFactorsMonthlyConsumption = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/ENERGY_FACTORS_MONTHLY_CONSUMPTION',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for energy factors monthly consumption'
})

export const generateGsrReportForFinalSpecificationOfAcceptedOffer = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/FINAL_SPECIFICATION_OF_ACCEPTED_OFFER',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for final specification of the accepted offer by project'
})

export const generateGsrReportForImportPositions = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/IMPORT_POSITIONS/project/{projectId}/import/{importId}',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report import positions'
})

export const generateGsrReportForKzpLineDistribution = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/KZP_LINE_DISTRIBUTION',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for kzp line distribution'
})

export const generateGsrReportForKzpMaterials = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/KZP_MATERIALS/project/{projectId}',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for KZP materials'
})

export const generateGsrReportForKzpPositionsTemplate = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/KZP_POSITIONS_TEMPLATE/project/{projectId}',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for KZP positions template'
})

export const generateGsrReportForKzpRgt = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/KZP_RGT/project/{projectId}',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for KZP RGT'
})

export const generateGsrReportForLinesForVerification = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/LINES_FOR_VERIFICATION/project/{projectId}',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for offer comparison'
})

export const generateGsrReportForOfferComparison = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/OFFER_COMPARISON/project/{projectId}',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for offer comparison'
})

export const generateGsrReportForOfferPerformance = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/OFFER_PERFORMANCE/project/{projectId}/calculation/{calculationId}',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for offer performance'
})

export const generateGsrReportForCalculationMaterialDifferential = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/MATERIAL_DIFFERENTIAL/project/{projectId}/calculation/{calculationId}/position/{calculationPositionId}/tubing-position/{tubingPositionId}',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report material differential'
})

export const generateGsrReportForKzpMaterialDifferential = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/MATERIAL_DIFFERENTIAL/project/{projectId}/kzp/position/{kzpPositionId}/tubing-position/{tubingPositionId}',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report material differential'
})

export const generateGsrReportForOfferProgress = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/OFFER_PROGRESS',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for offer progress'
})

export const generateGsrReportForPositionBalance = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/POSITION_BALANCE/project/{projectId}',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for position balance'
})

export const generateGsrReportForResourcesOnApprovedPositionsByTechnologists = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/RESOURCES_ON_APPROVED_POSITIONS_BY_TECHNOLOGISTS',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for resources on approved positions by technologists'
})

export const generateGsrReportForResourcesOnApprovedPositionsByTechnologistsInKzp = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/RESOURCES_ON_APPROVED_POSITIONS_BY_TECHNOLOGISTS_IN_KZP',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for resources on approved positions by technologists in KZP'
})

export const generateGsrReportForStartingSpecificationOfAcceptedOffer = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/STARTING_SPECIFICATION_OF_ACCEPTED_OFFER',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for starting specification of the accepted offer by project'
})

export const generateGsrReportForTechnologistsWorkInKzp = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/TECHNOLOGISTS_WORK_IN_KZP',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for technologist work in KZP'
})

export const generateGsrReportForTechnologistsWorkOnOffers = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/TECHNOLOGISTS_WORK_ON_OFFERS',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for technologist work on offers'
})

export const generateGsrReportForUnpricedWork = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/UNPRICED_WORK',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for unpriced work'
})

export const generateGsrReportForVerificationPosition = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/VERIFICATION_POSITION/project/{projectId}/calculation/{calculationId}',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for verification position'
})

export const generateGsrReportForVerification = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/VERIFICATION/project/{projectId}/calculation/{calculationId}',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for verification'
})

export const generateGsrReportForWorkDescriptionPrint = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/WORK_DESCRIPTION_PRINT/project/{projectId}',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report work description print'
})

export const generateGsrReportForWorkProgress = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/gsr-report/WORK_PROGRESS',
  method: 'post',
  swaggerControllerName: 'gsr-report-controller',
  trigger,
  description: 'Generate GSR report for work progress'
})
