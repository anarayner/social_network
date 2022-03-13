const {Schema, model} = require( 'mongoose')


const PostSchema = new Schema({
        userId: {type: Schema.Types.ObjectId, ref: 'User'},
        // userId: {type: String},
        content: {type: String},
        img: {type: String},
        createdBy: {type: String},
    },
    {
        timestamps: true
    })

module.exports = model('Post', PostSchema);