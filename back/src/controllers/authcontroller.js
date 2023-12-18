const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const authentication = async (req,res) => {
    const {cs, password, confirmpassword} = req.body

    if(!cs){
        return res.status(422).json({msg: 'Informe um cs válido'})
    }

    if(!password){
        return res.status(422).json({msg: 'Senha inválida'})
    }

    if (password !== confirmpassword){
        return res.status(422).json({msg: 'Senhas incorreta'})
    
    }


    const confirm = await bcrypt.genSalt(7)
    const passwordHash = await bcrypt.hash(password, confirm)

    const user = new User({cs, password: passwordHash,})

    try {
        
        await user.save()

        res.status(201).json({msg: ' Usuário criado com sucesso'})

    } catch (error) {

        console.log(error)
        res.status(500).json({msg: 'Erro de servidor '})

    }
    
}

const login = async (req,res) => {

    const {cs, password} = req.body

    if(!cs){
        return res.status(422).json({msg: 'Informe um cs válido'})
    }

    if(!password){
        return res.status(422).json({msg: 'Senha inválida'})
    }


    const user = await User.findOne({ cs: cs})

    if(!user){
        return res.status(404).json({msg: 'Cs não cadastrado'})
    }

    const cPassword = await bcrypt.compare(password, user.password)

    if(!cPassword){
        return res.status(422).json({msg: 'Senha inválida'})
    }

    try {
        const secret = process.env.SECRET

        const token = jwt.sign({
            id: user._id
        }, secret,)


            res.status(200).json({msg: 'Logando ', token})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Erro de servidor '})
    }
}





module.exports = {
    authentication,
    login
} 