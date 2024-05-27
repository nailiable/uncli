import type { IncomingMessage, ServerResponse } from 'node:http'
import type { Route } from 'vite-plugin-vue-configurable-router'
import type { Promisable } from '@naiable/utils'

export type NextFunction = (err?: unknown) => void
export type NextHandleFunction = (
  req: IncomingMessage,
  res: ServerResponse,
  next: NextFunction,
) => Promisable<void>

export namespace Integration {
  export interface ServerContext {
    get<Path extends string>(path: Path, handler: NextHandleFunction): this
    post<Path extends string>(path: Path, handler: NextHandleFunction): this
    put<Path extends string>(path: Path, handler: NextHandleFunction): this
    delete<Path extends string>(path: Path, handler: NextHandleFunction): this
    patch<Path extends string>(path: Path, handler: NextHandleFunction): this
    use(handler: NextHandleFunction): Promisable<void>
  }
  export namespace RouterContext {
    export interface ConfigurableRoute extends Omit<Route, 'children'> {}
  }
  export interface RouterContext {
    registerRoute(route: RouterContext.ConfigurableRoute): RouterContext
  }
}
export interface Integration {
  configureServer?(ctx: Integration.ServerContext): Promisable<Integration.ServerContext>
  configureRouter?(ctx: Integration.RouterContext): Promisable<Integration.RouterContext>
}

export function defineIntegration(options: Integration): Integration {
  return options
}
