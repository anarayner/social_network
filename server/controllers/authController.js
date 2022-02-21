const User = require ('../models/User');
const userService = require('../service/userService')
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
            const userData = await userService.registration(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async activation(req, res, next) {
        try {
            const activationLink = req.params.link
            await userService.activation(activationLink)
            return res.redirect('https://www.google.com/')
        } catch (e) {
            next(e)
        }
    }
    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await userService.login(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})
            return res.json(userData)

        } catch (e) {
            next(e)
        }
    }
    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return token
        } catch (e) {
            next(e)
        }
    }

    async refresh(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }
    async getUsers(req, res, next) {
        try {
          res.json({message: 'hi'})
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new AuthController();