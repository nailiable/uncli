const antfu = require('@antfu/eslint-config')

module.exports = antfu.default({
  rules: {
    'ts/no-namespace': 'off',
    'ts/method-signature-style': 'off',
    'no-console': 'off',
  },
})
