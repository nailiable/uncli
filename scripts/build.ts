import { execSync } from 'node:child_process'
import packageJson from '../package.json'

export function buildAll() {
  for (const key in packageJson.scripts) {
    if (key.startsWith('build:'))
      execSync(`pnpm run ${key}`, { stdio: 'inherit' })
  }
}

buildAll()
