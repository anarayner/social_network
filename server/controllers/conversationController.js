require('dotenv').config()
const ApiError = require('../errors/apiError')
const Conversation = require('../models/Conversation')

class ConversationController{

    async create(req, res, next){
        try{
            const {senderId, receiverId} = req.body
            const conversation  = new Conversation({ members: [senderId, receiverId] })
            await  conversation.save()
            return res.json(conversation)

        }catch (e) {
            next(ApiError.BadRequest(e.message))
        }
    }

    async userConversations (req, res, next){
        try{
            const {id} = req.params
            const conversations  = await Conversation.find({members: id}).sort('-updatedAt').populate('members', 'username profilePicture')
            return res.json(conversations)

        }catch (e) {
            next(ApiError.BadRequest(e.message))
        }
    }


}

module.exports = new ConversationController()