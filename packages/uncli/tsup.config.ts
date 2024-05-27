import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    common: 'src/common/index.ts',
    server: 'src/server/index.ts',
    cli: 'src/server/cli.ts',
  },
  dts: true,
  sourcemap: true,
  clean: true,
  format: ['cjs', 'esm'],
})
