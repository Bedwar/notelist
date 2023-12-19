const User = require("../models/User")
const jwt = require('jsonwebtoken')

const validateNome = (req,res,next) =>{
    const {body} = req

    if (body.nome == undefined){
        return res.status(400).json({message: 'title required'})
    }

    if (body.nome == ''){
       return  res.status(400).json({message: 'insert title '})
    }

    next()
}

const validateStatus = (req,res,next) =>{
    const {body} = req

    if (body.status == undefined){
        return res.status(400).json({message: 'status required'})
    }

    if (body.status == ''){
       return  res.status(400).json({message: 'insert status '})
    }

    next()
}

const validateToken =  (req, res, next) => {
    const authHeader =  req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]


    if(!token){
        return res.status(401).json({msg: 'Necssário ter acesso Admin'})
    }    

    try {
        const secret = process.env.SECRET
        jwt.verify(token, secret)

        next()

    } catch (error) {
        res.status(400).josn({msg: 'Token inválido'})
        
    }
}

const validateId = async (req,res) => {

    const id = req.params.id

    const user = await User.findById(id)

  //  if(!user){

  res.status(200).json({user})
    
}

module.exports = {
    validateNome,
    validateStatus,
    validateId,
    validateToken

}