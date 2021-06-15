const { findById } = require('../model/message')
const Message = require('../model/message')


//create message
exports.createMessage = async (req,res)=>{
    const {title,content} = req.body

    if(!title || !content){
        return res.status(400).json({
            error:'All fields required'
        })
    }

    const message =await Message.create(req.body)

    res.status(200).json({
        success:true,
        message
    })

}

//get all messages

exports.getAllMessages = async(req,res)=>{
    const message = await Message.find().sort({updatedAt:1})
    const count=message.length

    res.status(200).json({
        success:true,
        count,
        message
        
    })
}

//get single messages by id /api/:id
exports.singleMessage = async(req,res)=>{
    const id = req.params.id
  
    const message = await Message.findById(id)

    res.status(200).json({
        success:true,
        message
        
    })

}

//update the message by id /api/:id
exports.updateMessage = async(req,res)=>{
    const id = req.params.id
    const {title,content}=req.body

    if(!title || !content){
        return res.status(400).json({
            error:'All fields required'
        })
    }

    if(!id ){
        return res.status(400).json({
            error:'Id is required'
        })
    }
    const message = await Message.findById(id)

    message.title = title
    message.content = content
    message.save()


    res.status(200).json({
        success:true,
        message
        
    })

}

//delete messsage /api/:id

exports.deleteMessage = async(req,res)=>{
    const id = req.params.id

    const message =await Message.findById(id)
    if(message){
        return res.status(400).json({
            error:'Deleted already'
        })
    }
    message.remove()

    res.status(200).json({
        success:true,
        
    })
}