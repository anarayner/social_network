 require('dotenv').config()
const uuid = require('uuid');
const path = require('path')
const ApiError = require('../errors/apiError')
const Post = require('../models/Post')

class PostController{
    async create(req, res, next){
        try{
            const {content, userId} = req.body
            if(req.files) {
                const {img} = req.files
                if(!img){
                    throw ApiError.BadRequest("Only image can be uploaded")
                }
                let imgFileName = uuid.v4() + '.jpg'
                await img.mv(path.resolve (__dirname, '..', 'static', imgFileName))
                const post = await Post.create({content,userId, img: imgFileName})
                return res.json(post)
            }
            const post = await Post.create ({content, userId})

            return res.json(post)
        }catch (e) {
            next(ApiError.BadRequest(e.message))
        }
    }

    async fetchProfilePosts(req, res, next){
        try{
            const {id} = req.params
            const posts = await Post.find({userId: id})
                .populate('userId')
                .populate({path: 'comments',
                    populate: {path: 'userId', select: "-password"}})
            return res.json (posts)
        }catch (e) {
            next(ApiError.BadRequest(e.message))
        }
    }
    async fetchPosts(req, res, next){
        try{
            let posts = await Post.find({})
                .populate('userId')
                .populate({path: 'comments',
                    populate: {path: 'userId', select: "-password"}})
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
            const {id} = req.params
            const posts = await Post.deleteOne({_id: id})
            return res.json (posts)
        }catch (e) {
            next(ApiError.BadRequest(e.message))
        }
    }

    async likePost(req, res, next){
        try{
            const {postId} = req.body
            const post = await Post.find({_id: postId})
            if(!post[0].likes.includes(req.body.userId)){
                await post[0].updateOne({$push: {likes: req.body.userId}})
                res.json(post[0])
            } else {
                await post[0].updateOne({$pull: {likes: req.body.userId}})
                res.json(post[0])
            }
            // res.json(post)
        }catch (e) {
            next(ApiError.BadRequest(e.message))
        }
    }
    async fetchPostLikes(req, res, next){
        try{
            const {id} = req.params
            const post = await Post.findById(id)
            res.json(post.likes)
        }catch (e) {
            next(ApiError.BadRequest(e.message))
        }
    }


}

module.exports = new PostController()