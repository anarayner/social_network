const {Schema, model} = require( 'mongoose')


const UserSchema = new Schema({
    username: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    profilePicture: {type: String, default: ''},
    followers: {type: Array, default: []},
    following: {type: Array, default: []},
    isAdmin:{type: Boolean, default: true}
},
    {
       timestamps: true
    })

module.exports = model('User', UserSchema);
