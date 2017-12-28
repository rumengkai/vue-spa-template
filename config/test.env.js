var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
	NODE_ENV: '"testing"',
	BASE_API: '"http://123.57.35.40:8088"',
  LOGIN_DOMAIN: '"http://123.57.35.40"'
})
