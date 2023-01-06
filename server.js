const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dbConnection = require('./db')
const stadiumRoute = require('./routes/stadiumRoute')
const usersRouter = require('./routes/usersRoute')
const bookingsRouter = require('./routes/bookingsRoute')

app.use(express.json())

const path = require('path')

if(process.env.NODE_ENV==='production'){

    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

        res.sendFile(path.resolve(__dirname, 'client/build/index.html'));

    })
    
}


app.use('/api/stadiums' , stadiumRoute)
app.use('/api/users' , usersRouter)
app.use('/api/bookings' , bookingsRouter)

app.get('/',(req,res) => res.send('hello'))
app.listen(port, () => console.log('Node JS Server Started in Port 5000'))