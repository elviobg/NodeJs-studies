module.exports = function (api) {
  api.get('/ping', function (req, res) {
    res.send('pong')
  })
  api.post('/api/v1/posts', function (req, res) {
    api.controllers.posts.insert(api, req, res)
  })
  api.get('/api/v1/posts', function (req, res) {
    api.controllers.posts.getAllPosts(api, req, res)
  })
  api.get('/api/v1/posts/:id', function (req, res) {
    api.controllers.posts.getPostByID(api, req, res)
  })
  api.put('/api/v1/posts/:id', function (req, res) {
    api.controllers.posts.updatePost(api, req, res)
  })
  api.delete('/api/v1/posts/:id', function (req, res) {
    api.controllers.posts.removePost(api, req, res)
  })
}
