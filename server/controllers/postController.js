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
            if(req.files) {
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

    async fetchProfilePosts(req, res, next){
        try{
            const {id} = req.params
          let posts = await Post.find({userId: id})
            return res.json (posts)
        }catch (e) {
            next(ApiError.BadRequest(e.message))
        }
    }
    async fetchPosts(req, res, next){
        try{
            let posts = await Post.find({})
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

    async likePost(req, res, next){
        try{
            const {id} = req.params
            const post = await Post.findById(id)
            if(!post.likes.includes(req.body.userId)){
                await post.updateOne({$push: {likes: req.body.userId}})
                res.json({mes: 'Liked!'})
            } else {
                await post.updateOne({$pull: {likes: req.body.userId}})
                res.json({mes: 'Disliked!'})
            }
        }catch (e) {
            next(ApiError.BadRequest(e.message))
        }
    }


}

module.exports = new PostController()