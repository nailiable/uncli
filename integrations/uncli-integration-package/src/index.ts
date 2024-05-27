import { join } from 'node:path'
import type { Integration } from 'uncli'

let __dirname: string
if (typeof __dirname === 'undefined')
  __dirname = new URL('.', import.meta.url).pathname

export default function uncliPackageJsonIntegration(): Integration {
  return {
    configureRouter(ctx) {
      return ctx.registerRoute({
        path: '/',
        name: 'uncli-package-json',
        component: join(__dirname, './PackageJson.vue'),
      })
    },
  }
}
