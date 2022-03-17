const {Schema, model} = require( 'mongoose')


const UserSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    profilePicture: {type: String, default: '63df6dce-df09-4ef9-8516-3fc044b5ebd2.jpg'},
    followers: {type: Array, default: []},
    following: {type: Array, default: []}
    },
    {
       timestamps: true
    })

module.exports = model('User', UserSchema);
