const Router = require('express')
const router = new Router();
const UserController = require('../../../NETWORK/server/controllers/userController')
const authMiddleware = require ('../middleware/authMiddleware');

router.get('/:id', UserController.getOne )
router.get('/',  UserController.getUsers )
router.put('/:id', UserController.updateOne )
router.put('/img/:id', UserController.uploadImg )
router.delete('/:id', UserController.deleteOne )
router.patch('/:id/follow', UserController.follow)



module.exports = router