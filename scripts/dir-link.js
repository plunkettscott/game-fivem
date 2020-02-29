const { resolve } = require('path')
const symlinkDir = require('symlink-dir')

;(async () => {
  await symlinkDir(resolve('resources'), resolve(process.argv[2], '[response]'))
})()
