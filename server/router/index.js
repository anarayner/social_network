const Router = require('express')
const authRouter = require('./authRouter')
const postRouter = require ('./postRouter');
const userRouter = require ('./userRouter');
const commentRouter = require ('./commentRouter');
const chatRouter = require ('./chatRouter');



const router = new Router();

router.use('/auth', authRouter)
router.use('/posts', postRouter)
router.use('/user', userRouter)
router.use('/comments', commentRouter)
router.use('/chat', chatRouter)






module.exports = router