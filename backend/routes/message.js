const route = require('express').Router()

const { createMessage,
    getAllMessages,
    singleMessage,
    updateMessage,
    deleteMessage
 } = require('../controllers/messageControllers')




route.get('/',getAllMessages)

route.post('/',createMessage)
route.get('/:id',singleMessage)
route.put('/:id',updateMessage)
route.delete('/:id',deleteMessage)


module.exports=route