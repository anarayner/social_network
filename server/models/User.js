const {Schema, model} = require( 'mongoose')


const UserSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    profilePicture: {type: String, default: 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg'},
    followers: {type: Array, default:[]},
    following: {type: Array, default:[]}
    },
    {
       timestamps: true
    })

module.exports = model('User', UserSchema);
