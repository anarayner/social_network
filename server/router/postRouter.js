const Router = require('express')
const router = new Router();
const PostController = require('../../../NETWORK/server/controllers/postController')

router.post('/', PostController.create )
router.get('/profile/:id', PostController.fetchProfilePosts)
router.get('/list', PostController.fetchPosts)
router.put('/:id', PostController.updateOne )
router.delete('/:id', PostController.deleteOne)
router.post('/like', PostController.likePost)
router.get('/likes/:id', PostController.fetchPostLikes)

module.exports = router