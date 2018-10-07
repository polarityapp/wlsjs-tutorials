const fs = require('fs')
const path = require('path')
if(process.argv.length === 3) {
  if(process.argv[2].match(/[a-z_]/gi)) {
    if(fs.existsSync(path.resolve(__dirname, process.argv[2]))) {
      if(fs.existsSync(path.resolve(__dirname, process.argv[2], 'index.js'))) {
        require(path.resolve(__dirname, process.argv[2], 'index.js'))
      }
    }
  }
}