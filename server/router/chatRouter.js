const Router = require('express')
const router = new Router();
const ConversationController = require('../../../NETWORK/server/controllers/conversationController')
const MessageController = require('../../../NETWORK/server/controllers/messageController')



router.post('/conversation', ConversationController.create )
router.get('/conversations/:id', ConversationController.userConversations )
router.post('/message', MessageController.create )
router.get('/messages/:id', MessageController.conversationMessages)



module.exports = router