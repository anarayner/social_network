const Router = require('express')
const AuthController = require('../controllers/authController');
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min:6, max:20}),
    AuthController.registration)
router.get('/activate/:link', AuthController.activation)
router.post('/login', AuthController.login)
router.post('/logout', AuthController.logout)
router.get('/refresh', AuthController.refresh)
router.get('/users', authMiddleware, AuthController.getUsers)


module.exports = router