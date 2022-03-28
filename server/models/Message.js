const {Schema, model} = require( 'mongoose')

const MessageSchema = new Schema({
        conversationId: {type: Schema.Types.ObjectId, ref: 'Conversation'},
        sender: {type: Schema.Types.ObjectId, ref: 'User'},
        content: {type: String}
    },
    {
        timestamps: true
    })

module.exports = model('Message', MessageSchema);