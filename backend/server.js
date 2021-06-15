const express = require('express')
const app = express()
const dotenv= require('dotenv')
const dbConnection = require('./config/dbconnection')
const messageRoute = require('./routes/message')
const cors = require('cors')
dotenv.config({path:'./config/config.env'})

//Db connection
dbConnection
dbConnection()

app.use(express.json())
app.use(cors())
//routes
app.use('/api',messageRoute)

//server 
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`App is litsening on port ${port}`)
})




