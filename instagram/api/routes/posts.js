module.exports = function (api) {
  api.get('/ping', function (req, res) {
    res.send('pong')
  })
  api.get('/api/v1/posts', function (req, res) {
    api.controllers.posts.getAllPosts(api, req, res)
  })
  api.get('/api/v1/posts/:id', function (req, res) {
    api.controllers.posts.getPostByID(api, req, res)
  })
  api.post('/api/v1/posts', function (req, res) {
    api.controllers.posts.insert(api, req, res)
  })
}
