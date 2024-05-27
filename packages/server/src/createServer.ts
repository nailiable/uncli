import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import process from 'node:process'
import vuePlugin from '@vitejs/plugin-vue'
import vueJsxPlugin from '@vitejs/plugin-vue-jsx'
import UnocssVitePlugin from 'unocss/vite'
import { createServer } from 'vite'
import UnCli from 'vite-plugin-uncli'
import { UncliConfigSchema, generateJsonSchema } from '@unclijs/common'
import { loadConfig } from './config'

let __dirname: string
if (typeof globalThis.__dirname === 'undefined')
  __dirname = new URL('.', import.meta.url).pathname

export async function createUncliServer(configSchema = UncliConfigSchema()) {
  const config = await loadConfig().load()
  configSchema.default({
    integrations: {},
  }).parse(config)

  if (!existsSync(join(process.cwd(), '.uncli')))
    mkdirSync(join(process.cwd(), './.uncli'), { recursive: true })
  const generatedJsonSchema = generateJsonSchema(configSchema, {
    removeAdditionalStrategy: 'strict',
  })
  writeFileSync(join(process.cwd(), './.uncli/uncli.schema.json'), JSON.stringify(generatedJsonSchema))

  return await createServer({
    root: existsSync(join(process.cwd(), '.uncli/index.html'))
      ? join(process.cwd(), '.uncli/index.html')
      : join(__dirname, '../client'),
    plugins: [
      vuePlugin(),
      vueJsxPlugin(),
      UnocssVitePlugin(),
      UnCli(),
    ],
    server: {
      host: '0.0.0.0',
      port: 4444,
    },
  })
}
