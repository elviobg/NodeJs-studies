
const imageManager = function () {
  const fs = require('fs')
  const prefixedSubfolder = './user_files/'

  return function (data) {
    switch (data.operation) {
      case 'saveImage':        
        fs.rename(data.path.original, prefixedSubfolder + data.path.destination, data.callback)
        break
      default:
        break
    }
  }
}

module.exports = function () {
  return imageManager
}
