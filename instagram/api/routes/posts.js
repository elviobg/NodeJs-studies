module.exports = function (api) {
  api.get('/ping', function (req, res) {      
    res.send('pong')
  })
  api.post('/api/v1/posts', function (req, res) {      
    api.controllers.posts.insert(api, req, res)
  })
}