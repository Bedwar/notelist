const consultaModel = require('../models/consultaModel')

const getPosto = async (_req, res) => {
    const consulta = await consultaModel.getPosto()

    return res.status(200).json(consulta)
}

const createPosto = async (req,res) => {

// enviar o ibm que solicitei em consultaModel
const createdPosto = await consultaModel.createPosto(req.body)
 return res.status(201).json(createdPosto)
}

const deletePosto = async(req,res) =>{
    const {ibm} = req.params

    await consultaModel.deletePosto(ibm)
    return res.status(204).json()

}

const updatePosto = async(req,res) =>{

    const {ibm} = req.params

    await consultaModel.updatePosto(ibm, req.body)
    return res.status(204).json()
}


module.exports = {
    getPosto,
    createPosto,
    deletePosto,
    updatePosto
} 