const mongoose = require("mongoose");

const stadiumSchema = mongoose.Schema({

    name : {
        type: String,
        require: true
    },
    capacity : {
        type: Number,
        require: true
    },
    phonenumber : {
        type: String,
        require: true
    },
    rentperhour : {
        type: String,
        require: true
    },
    image : [],
    bookedTimeSlots : [],
    type : {
        type: String,
        require: true
    },
    description : {
        type: String,
        require: true
    }

} , {timestamps : true,}
)

const stadiumModel = mongoose.model('stadiums', stadiumSchema)

module.exports = stadiumModel