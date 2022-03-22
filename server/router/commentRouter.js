const Router = require('express')
const router = new Router();
const CommentController = require('../../../NETWORK/server/controllers/commentController')

router.post('/', CommentController.createComment )
router.get('/:id', CommentController.fetchPostComments)
router.put('/:id', CommentController.updateOne )
router.delete('/:id', CommentController.deleteOneComment)


module.exports = router