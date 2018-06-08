function ImageDAO (imageManager) {
  this._imageManager = imageManager()
}

ImageDAO.prototype.saveImage = function (pathOriginal, pathDestination, response) {
  var data = {
    operation: 'saveImage',
    path: {
      original: pathOriginal,
      destination: pathDestination
    },
    callback: response
  }
  this._imageManager(data)
}

module.exports = function () {
  return ImageDAO
}
