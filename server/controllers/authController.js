const User = require ('../models/User');
const authService = require('../service/authService')
require('dotenv').config()
const {validationResult} = require('express-validator')
const ApiError = require('../errors/apiError')


class AuthController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return next(ApiError.BadRequest('Validation error', errors.array()))
            }
            const {email, password} = req.body;
            const userData = await authService.registration(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async activation(req, res, next) {
        try {
            const activationLink = req.params.link
            await authService.activation(activationLink)
            return res.redirect('http://localhost:3000/api/home/')
        } catch (e) {
            next(e)
        }
    }
    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await authService.login(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})
            return res.json(userData)

        } catch (e) {
            next(e)
        }
    }
    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const token = await authService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (e) {
            next(e)
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const userData = await authService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

}

module.exports = new AuthController();