const mongoose = require('mongoose')

const dbConnection = ()=>{


mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useFindAndModify:true,
    useUnifiedTopology:true
}).then(conn=>{
    console.log(`DB connected succes ${conn.connection.host}`)
}).catch(err=>[
    console.log(`Error db ${err}`)
])
}

module.exports=dbConnection