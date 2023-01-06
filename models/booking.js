const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({

    stadium : {
        type: mongoose.Schema.Types.ObjectId , ref:'stadiums'
    },
    user : {
        type: mongoose.Schema.Types.ObjectId , ref:'users'
    },
    bookedTimeSlots : {
        from : {type : String,} , 
        to : {type : String}
    },
    totalHours : {
        type: Number
    },
    transactionId : {
        type: String
    }
},
  {timestamps : true}
)

const bookingModel = mongoose.model('bookings', bookingSchema)

module.exports = bookingModel