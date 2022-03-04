require('dotenv').config()
const uuid = require('uuid');
const path = require('path')
const ApiError = require('../errors/apiError')
const Post = require('../models/Post')
const User = require('../models/User')

class PostController{

    async create(req, res, next){
        try{
            const {content, userId, createdBy} = req.body
            if(req.files !== undefined || null) {
                const {img} = req.files
                if(!img){
                    throw ApiError.BadRequest("Only image can be uploaded")
                }
                let imgFileName = uuid.v4() + '.jpg'
                await img.mv(path.resolve (__dirname, '..', 'static', imgFileName))
                const post = await Post.create({content,userId, createdBy, img: imgFileName})
                return res.json(post)
            }
            const post = await Post.create ({content, userId, createdBy})
            return res.json(post)
        }catch (e) {
            next(ApiError.BadRequest(e.message))
        }
    }

    async getPostList(req, res, next){
        try{
          const user = await User.findById(req.body.userId)
          let posts = await Post.find({user})
            return res.json (posts)
        }catch (e) {
            next(ApiError.BadRequest(e.message))
        }
    }
    async updateOne(req, res, next){
        try{

        }catch (e) {

        }
    }
    async deleteOne(req, res, next){
        try{

        }catch (e) {

        }
    }

}

module.exports = new PostController()