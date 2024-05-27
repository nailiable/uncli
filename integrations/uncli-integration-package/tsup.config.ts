import { defineConfig } from 'tsup'
import { copyVueFiles } from 'vite-plugin-uncli'

export default defineConfig({
  entry: { index: 'src/index.ts' },
  dts: true,
  sourcemap: true,
  clean: true,
  format: ['cjs', 'esm'],
  async onSuccess() {
    copyVueFiles('src', 'dist')
  },
})
