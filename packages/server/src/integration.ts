import type { Integration } from '@unclijs/common'
import { UncliConfigSchema } from '@unclijs/common'
import { importx } from 'importx'
import Chalk from 'chalk'
import { loadConfig } from './config'

let __dirname: string
if (typeof globalThis.__dirname === 'undefined')
  __dirname = new URL('.', import.meta.url).pathname

export async function loadAllIntegrations(configSchema = UncliConfigSchema()): Promise<Integration[]> {
  const config = loadConfig().load()
  const parsedConfig = configSchema.default({
    integrations: {},
  }).parse(config)
  const loadedIntegrations: Integration[] = []
  for (const [key, options] of Object.entries(parsedConfig.integrations || {})) {
    console.log(`${Chalk.greenBright(Chalk.bold('  ➜  Integration:'))} ${Chalk.blue(key)}`)
    const mod = await importx(key, __dirname)
    let integration: Integration
    if (typeof mod === 'function')
      integration = mod(options)
    else if (typeof mod === 'object' && typeof mod.default === 'function')
      integration = mod.default(options)
    else throw new Error(`Invalid integration: ${key}`)
    loadedIntegrations.push(integration)
  }
  return loadedIntegrations
}
