const router = require('express').Router()

/* 
Manejar la peticion de tipo post a /login con el servicio del punto b. 
*/

const authServices = require('./auth.services')

router.post('/login', authServices.postLogin)

module.exports = router
