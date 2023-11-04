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

module.exports = {
    validateNome,
    validateStatus,

}