const express = require ('express')
const { route } = require('express/lib/application')
const router = express.Router()

const usercontroller = require('../router/controllers/user')




  router.get('/users', usercontroller.index)

  router.get('/user/:id', usercontroller.show)

    router.post('/user', usercontroller.store)
    
    router.put('/user/:id', usercontroller.update)
  
    router.delete('/user/:id', usercontroller.delete)
    module.exports = router