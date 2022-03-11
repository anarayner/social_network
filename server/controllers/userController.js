require('dotenv').config()
const ApiError = require('../errors/apiError')
const authService = require ('../service/authService');
const bcrypt = require ('bcrypt');
const User = require('../models/User')
const path = require ('path');
const uuid = require('uuid');
const fs = require("fs");


class UserController{

    async getOne(req, res, next){
        try{
            const {id} = req.params
            const user = await User.find({_id: id})
            res.json(user)

        }catch (e) {
            next(ApiError.BadRequest(e.message))
        }
    }

    async getUsers(req, res, next) {
        try {
            const users = await User.find({})
            res.json(users)
        } catch (e) {
            next(ApiError.BadRequest(e.message))
        }
    }
    async updateOne(req, res, next){
        try{
            const {id} = req.params
               let {password} = req.body
               if(password){
              password =  await bcrypt.hash(password, 2)
              return password
           }

          const user = await User.findByIdAndUpdate(id, {$set: req.body})
            res.json(user)
        }catch (e) {
            next(e)
        }
    }

    async uploadImg(req, res, next){
        try{
            const {id} = req.params
            const {profilePicture} = req.files
            let imgFileName = uuid.v4 () + '.jpg'
            await profilePicture.mv (path.resolve (__dirname, '..', 'static', imgFileName))
            const user = await User.findByIdAndUpdate(id, {profilePicture: imgFileName})
            return res.json (user)

        }catch (e) {
            res.json (e.message)
        }
    }
    async deleteOne(req, res, next){
        try{
            const {id} = req.params
            const user = await User.deleteOne({_id: id})
            res.json(user)
        }catch (e) {
            next(e)
        }
    }

}

module.exports = new UserController()