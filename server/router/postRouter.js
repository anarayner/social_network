const Router = require('express')
const router = new Router();
const PostController = require('../../../NETWORK/server/controllers/postController')

router.post('/', PostController.create )
router.get('/list', PostController.getPostList)
router.put('/:id', PostController.updateOne )
router.delete('/:id', PostController.deleteOne )


module.exports = router