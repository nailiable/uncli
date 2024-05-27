import { UncliConfigSchema } from '@unclijs/common'
import type { Plugin, PluginOption } from 'vite'
import VueConfigurableRouter from 'vite-plugin-vue-configurable-router'
import AutoImport from 'unplugin-auto-import/vite'
import { loadAllIntegrations } from './integration'
import { initConnectServer, initVueConfigurableRouter } from './init'

export async function UnCli(configSchema = UncliConfigSchema()): Promise<(PluginOption | Plugin)[]> {
  const integrations = await loadAllIntegrations(configSchema)

  return [
    VueConfigurableRouter({
      routes: await initVueConfigurableRouter(integrations),
    }),
    AutoImport({
      dts: true,
      imports: [
        'vue',
        'vue-router',
      ],
    }),
    {
      name: 'vite-plugin-uncli',
      async configureServer(server) {
        await initConnectServer(server.middlewares, integrations)
      },
    },
  ]
}
