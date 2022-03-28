const {Schema, model} = require( 'mongoose')

const ConversationSchema = new Schema({
        members: [{type: Schema.Types.ObjectId, ref: 'User'}]
    },
    {
        timestamps: true
    })

module.exports = model('Conversation', ConversationSchema);