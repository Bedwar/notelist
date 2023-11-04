const express = require('express')
const consultaController = require ('./controllers/consultaController')
const consultaMiiddle = require('./middlewares/consultaMiddle')
const router = express.Router()


router.get('/', (req,res) => res.send("ok").status(200))

router.get('/consulta', consultaController.getPosto)
router.post('/consulta',consultaMiiddle.validateNome, consultaController.createPosto)
router.delete('/consulta/:ibm', consultaController.deletePosto)
router.put('/consulta/:ibm',
consultaMiiddle.validateNome, consultaMiiddle.validateStatus, 
    consultaController.updatePosto)

module.exports = router;