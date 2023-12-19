const express = require('express')
const consultaController = require ('./controllers/consultaController')
const consultaMiiddle = require('./middlewares/consultaMiddle')
const authController = require ('./controllers/authController')
const router = express.Router()
const User = require ('./models/User')



router.get('/', (req,res) => res.send("ok").status(200))

router.get('/consulta', consultaController.getPosto)
router.post('/consulta',consultaMiiddle.validateNome, consultaController.createPosto)
router.delete('/consulta/:ibm', consultaController.deletePosto)
router.put('/consulta/:ibm',
                        consultaMiiddle.validateNome, consultaMiiddle.validateStatus, consultaController.updatePosto)
router.post('/auth', authController.authentication )
router.post('/auth/login', authController.login )
router.get('/user/:id', consultaMiiddle.validateId )





module.exports = router;