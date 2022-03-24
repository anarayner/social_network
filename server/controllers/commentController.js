require('dotenv').config()
const ApiError = require('../errors/apiError')
const Post = require('../models/Post')
const Comment = require('../models/Comment')

class CommentController{

    async createComment(req, res, next){
        try{
            const {content, userId, postId} = req.body
            const comment = await Comment.create ({content, userId, postId})
            await Post.findOneAndUpdate({_id: postId}, {
                $push: {comments: comment._id}
            }, {new: true}).populate('userId')
            // const newPosts = await Post.find({})
            const comments = await Comment.find({_id: comment._id}).populate('userId')
            return res.json(comments[0])
        }catch (e) {
            next(ApiError.BadRequest(e.message))
        }
    }

    async fetchPostComments(req, res, next){
        try{
            const {id} = req.params
            const comment = await Comment.find({postId: id}).populate('userId')
            return res.json (comment)
        }catch (e) {
            next(ApiError.BadRequest(e.message))
        }
    }

    async deleteOneComment(req, res, next){
        try{
            const {id} = req.params
            const comment = await Comment.deleteOne({_id: id})
            return res.json (comment)
        }catch (e) {
            next(ApiError.BadRequest(e.message))
        }
    }


    async updateOne(req, res, next){
        try{

        }catch (e) {

        }
    }
}

module.exports = new CommentController()