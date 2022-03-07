const Router = require('express')
const router = new Router();
const PostController = require('../../../NETWORK/server/controllers/postController')

router.post('/', PostController.create )
router.get('/profile/:id', PostController.getProfilePosts)
router.put('/:id', PostController.updateOne )
router.delete('/:id', PostController.deleteOne )


module.exports = router