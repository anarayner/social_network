const {Schema, model} = require( 'mongoose')

const CommentSchema = new Schema({
        userId: {type: Schema.Types.ObjectId, ref: 'User'},
        postId: {type: Schema.Types.ObjectId, ref: 'Post'},
        content: {type: String},
    },
    {
        timestamps: true
    })

module.exports = model('Comment', CommentSchema);