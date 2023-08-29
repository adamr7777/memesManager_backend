const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        username: String,
        encryptedPwd: String,
        userMemes: [{
            id: String,
            origin: String,
            url: String,
            liked: Boolean,
            favorite: Boolean,
            comments: [String],
        }]
    });

module.exports = mongoose.model('User', UserSchema);