const Router = require('express')
const authRouter = require('./authRouter')
const router = new Router();

router.use('/auth', authRouter)


module.exports = router