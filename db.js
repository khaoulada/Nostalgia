const mongoose = require("mongoose");


function connectDB(){
    mongoose.connect('mongodb+srv://admin:admin@cluster0.npsnt2u.mongodb.net/projet' , {useUnifiedTopology:true , useNewUrlParser:true})
    
    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successful')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection failed')
    })


}



connectDB()

module.exports = mongoose