const UserModel = require('../models/User')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const emailService = require('./emailService')
const tokenService = require('../service/tokenService')
const UserDTO = require('../dtos/userDTO')
require('dotenv').config()
const ApiError = require('../errors/apiError')



class AuthService{
    async registration(username, email, password){
        const condidate = await UserModel.findOne({email})
        if (condidate){
            throw ApiError.BadRequest(`This email address is already being used.`)
        }
        const hashPassword = await bcrypt.hash(password, 2)
        const activationLink = uuid.v4()
        const user = await UserModel.create({username, email, password: hashPassword, activationLink})
        try {
            await emailService.sendActivationEmail(email, `${process.env.API_URL}/api/auth/activate/${activationLink}`)
        }catch(e){
            console.log(e.message)
        }
        const userDTO = new UserDTO(user)
        const tokens = tokenService.generateToken({...userDTO})
        await  tokenService.saveToken(userDTO.id, tokens.refreshToken)
        return {...tokens, user: userDTO}

    }

    async activation(activationLink){
        console.log('hello')
        const user = await UserModel.findOne({activationLink})
        if (!user){
            throw ApiError.BadRequest('Invalid activation link')
        }
        user.isActivated = true;
        user.save()
    }
    async login (email, password){
        console.log(email)
        try {
            const user = await UserModel.findOne ({email})
            if (!user) {
                throw ApiError.BadRequest ('User with this email is not found')
            }
            const isPasswordConfirmed = await bcrypt.compare (password, user.password)
            if (!isPasswordConfirmed) {
                throw ApiError.BadRequest ('Invalid password')
            }
            const userDTO = new UserDTO (user)
            const tokens = tokenService.generateToken ({...userDTO})
            await tokenService.saveToken (userDTO.id, tokens.refreshToken)
            return {...tokens, user: userDTO}
        } catch (e) {
            console.log(e.message)
        }

    }

    async logout (refreshToken){
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken){
        if(!refreshToken){
            throw ApiError.UnauthorizedError()
        }
        const user_Data = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)
        if(!user_Data || !tokenFromDb){
            throw ApiError.UnauthorizedError()
        }
        const user = await UserModel.findById(user_Data.id)
        const userDTO = new UserDTO(user)
        const tokens = tokenService.generateToken({...userDTO})
        await  tokenService.saveToken(userDTO.id, tokens.refreshToken)
        return {...tokens, user: userDTO}
    }

}


module.exports = new AuthService();