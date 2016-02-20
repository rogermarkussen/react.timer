var getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'example/example.js',
  out: 'example/public',
  isDev: true,
  clearBeforeBuild: true
})
