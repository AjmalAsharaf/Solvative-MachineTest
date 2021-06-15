const mongoose = require('mongoose')

const messageShema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:[true,'Title required']
    },
    content:{
        type:String,
        required:true,

    },
    draftFlag:{
        type:String,
    }

},{timestamps:true})

module.exports = mongoose.model('Message',messageShema)