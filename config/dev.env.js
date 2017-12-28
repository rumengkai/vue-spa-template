var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
	NODE_ENV: '"development"',
	ENV_CONFIG: '"dev"',
	BASE_API: '"http://123.57.35.40:8088"',
  LOGIN_DOMAIN: '"http://123.57.35.40"'
})
