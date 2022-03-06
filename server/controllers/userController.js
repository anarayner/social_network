require('dotenv').config()
const ApiError = require('../errors/apiError')
const authService = require ('../service/authService');
const bcrypt = require ('bcrypt');
const User = require('../models/User')


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
            const users = await User.find()
            res.json(users)
        } catch (e) {
            next(e)
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