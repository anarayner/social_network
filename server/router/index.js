const Router = require('express')
const authRouter = require('./authRouter')
const postRouter = require ('./postRouter');
const userRouter = require ('./userRouter');

const router = new Router();

router.use('/auth', authRouter)
router.use('/posts', postRouter)
router.use('/user', userRouter)




module.exports = router