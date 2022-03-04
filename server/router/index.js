const Router = require('express')
const authRouter = require('./authRouter')
const postRouter = require ('./postRouter');
const router = new Router();

router.use('/user', authRouter)
router.use('/posts', postRouter)


module.exports = router