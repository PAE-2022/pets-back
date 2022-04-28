const { Schema, model } = require('mongoose');

// Declare pet model
const UserSchema = new Schema({
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    pictureUrl: {
        type: String,
        required: true,
    },
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;