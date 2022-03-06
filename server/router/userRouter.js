const Router = require('express')
const router = new Router();
const UserController = require('../../../NETWORK/server/controllers/userController')
const authMiddleware = require ('../middleware/authMiddleware');

router.get('/:id', UserController.getOne )
router.get('/users',  UserController.getUsers)
router.put('/:id', UserController.updateOne )
router.delete('/:id', UserController.deleteOne )


module.exports = router