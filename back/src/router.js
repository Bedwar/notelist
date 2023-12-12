const express = require('express')
const consultaController = require ('./controllers/consultaController')
const consultaMiiddle = require('./middlewares/consultaMiddle')
//const authcontroller = require('./controllers/authcontroller')
const router = express.Router()


router.get('/', (req,res) => res.send("ok").status(200))

router.get('/consulta', consultaController.getPosto)
router.post('/consulta',consultaMiiddle.validateNome, consultaController.createPosto)
router.delete('/consulta/:ibm', consultaController.deletePosto)
router.put('/consulta/:ibm',
consultaMiiddle.validateNome, consultaMiiddle.validateStatus, 
    consultaController.updatePosto)
router.post('/auth', async (req,res)=>{
    const {name, password} = req.body
    if(!name){
        return res.status(422).json({msg: 'oi auth'})
    }
} )

module.exports = router;