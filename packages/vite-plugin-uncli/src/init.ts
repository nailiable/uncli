import { join } from 'node:path'
import type { Server } from 'connect'
import type { Route } from 'vite-plugin-vue-configurable-router'
import type { Integration } from '@unclijs/common'
import { match } from 'path-to-regexp'

export async function initVueConfigurableRouter(integrations: Integration[]): Promise<Route[]> {
  const routes: Route[] = []
  for (const integration of integrations) {
    if (!integration.configureRouter)
      continue
    await integration.configureRouter({
      registerRoute(route) {
        routes.push(route)
        return this
      },
    })
  }
  return routes
}

export async function initConnectServer(server: Server, integrations: Integration[]) {
  for (const integration of integrations) {
    if (!integration.configureServer)
      continue
    await integration.configureServer({
      get(path, handler) {
        server.use(async (req, res, next) => {
          if (match(path)(join('/_uncli', req.url || '')) && req.method === 'GET')
            await handler(req, res, next)
          else
            next()
        })
        return this
      },
      post(path, handler) {
        server.use(async (req, res, next) => {
          if (match(path)(join('/_uncli', req.url || '')) && req.method === 'POST')
            await handler(req, res, next)
          else
            next()
        })
        return this
      },
      put(path, handler) {
        server.use(async (req, res, next) => {
          if (match(path)(join('/_uncli', req.url || '')) && req.method === 'PUT')
            await handler(req, res, next)
          else
            next()
        })
        return this
      },
      delete(path, handler) {
        server.use(async (req, res, next) => {
          if (match(path)(join('/_uncli', req.url || '')) && req.method === 'DELETE')
            await handler(req, res, next)
          else
            next()
        })
        return this
      },
      patch(path, handler) {
        server.use(async (req, res, next) => {
          if (match(path)(join('/_uncli', req.url || '')) && req.method === 'PATCH')
            await handler(req, res, next)
          else
            next()
        })
        return this
      },
      use(handler) {
        server.use((req, res, next) => {
          if ((req.url || '').startsWith('/_uncli'))
            handler(req, res, next)
          else
            next()
        })
        return this
      },
    })
  }
}
