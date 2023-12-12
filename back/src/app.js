const express = require('express')
const cors = require('cors')
const router = require('./router')
const app = express()
const  mongoose = require ('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mustacheExpress = require ('mustache-express')
const engine = mustacheExpress()


// app.engine("mustache", engine)
// app.set("views", "models")
// app.set("view engine", "mustache")

// app.get('/', (req,res) => {res.render("home",{title: "Ola"})})

//const dbUser = process.env.DB_USER
//const dbPass = process.env.DB_PASS

mongoose.connect('mongodb+srv://beatrizdoraw:NpGuwA71g9ePGzfB@cluster0.5zhqw2v.mongodb.net/?retryWrites=true&w=majority').then(() => {
console.log('onde eu to?')

}).catch((err) => console.log(err))
app.use(express.json())
app.use(router)
app.use(cors())
module.exports = app;
// 1 jan 1970