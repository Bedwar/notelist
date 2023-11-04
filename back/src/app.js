const express = require('express')
const cors = require('cors')
const router = require('./router')
const app = express()
// const mustacheExpress = require ('mustache-express')
// const engine = mustacheExpress()


// app.engine("mustache", engine)
// app.set("views", "models")
// app.set("view engine", "mustache")

// app.get('/', (req,res) => {res.render("home",{title: "Ola"})})

app.use(express.json())
app.use(router)
app.use(cors())

module.exports = app;
// 1 jan 1970