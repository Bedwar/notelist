var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    cs: String,
    password: String,
    confirmpassword: String
})

module.exports = mongoose.model('User', User);