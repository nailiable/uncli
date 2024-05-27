import { createUncliServer } from '@unclijs/server'
import Chalk from 'chalk'
import { description, version } from '../../package.json'

(async () => {
  console.clear()
  console.log()
  console.log(`  ${Chalk.bold('uncli')}  ${Chalk.dim(`v${version} - ${description}`)}`)
  console.log()
  const uncliServer = await createUncliServer()
  await uncliServer.listen()
  uncliServer.printUrls()
  uncliServer.bindCLIShortcuts({ print: true })
})()
