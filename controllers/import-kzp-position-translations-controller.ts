import { Endpoint, Trigger } from '../utils'

export const getImportKzpPositionTranslationsConfig = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/import/kzp-position-translations/{importId}/config',
  method: 'get',
  swaggerControllerName: 'import-kzp-position-translations-controller',
  trigger,
  description: 'Get import kzp position translations config'
})

export const getImportKzpPositionTranslationsItems = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/kzp-position-translations/{importId}/items/search',
  method: 'post',
  swaggerControllerName: 'import-kzp-position-translations-controller',
  trigger,
  description: 'Get import items'
})

export const runImportKzpPositionTranslations = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/kzp-position-translations/{importId}/run',
  method: 'put',
  swaggerControllerName: 'import-kzp-position-translations-controller',
  trigger,
  description: 'Run import kzp position translations'
})

export const prepareImportKzpPositionTranslations = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/kzp-position-translations/project/{projectId}/kzp',
  method: 'post',
  swaggerControllerName: 'import-kzp-position-translations-controller',
  trigger,
  description: 'Prepare import kzp position translations based on the file'
})
