const ApiError = require('../errors/apiError')
const Message = require ('../models/Message');

class MessageController{

    async create(req, res, next){
        try{
            const {conversationId, sender, content} = req.body
            const message = await Message.create ({conversationId, sender, content})
            const messages  = await Message.find({conversationId: conversationId}).populate('sender', 'username profilePicture')
            return res.json(messages)

        }catch (e) {
            next(ApiError.BadRequest(e.message))
        }
    }

    async conversationMessages (req, res, next){
        try{
            const {id} = req.params
            const messages  = await Message.find({conversationId: id}).populate('sender', 'username profilePicture')
            return res.json(messages)

        }catch (e) {
            next(ApiError.BadRequest(e.message))
        }
    }


}

module.exports = new MessageController()