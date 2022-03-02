require('dotenv').config()
const uuid = require('uuid');
const path = require('path')
const ApiError = require('../errors/apiError')
const Post = require('../models/Post')

class PostController{

    async create(req, res, next){
        try{
          const {content} = req.body
            if(req.files !== undefined) {
                const {img} = req.files
                let imgFileName = uuid.v4() + '.jpg'
                await img.mv(path.resolve (__dirname, '..', 'static', imgFileName))
                const post = Post.create ({content, img: imgFileName})
                return res.json (post)
            }
            const post = Post.create ({content})
            return res.json (post)
        }catch (e) {
            next(ApiError.BadRequest(e.message))
        }
    }

    async getAll(req, res, next){
        try{

        }catch (e) {

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