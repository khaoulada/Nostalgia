const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    username : {
        type: String,
        require: true
    },
    password : {
        type: Number,
        require: true
    }
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel