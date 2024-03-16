const {Shema, module} = require('mongoose')


const UserShema =  new Shema({
    email:{type: String, unique: true, require: true},
    password:{type: String, require: true},
    isAtivated:{type: Boolean, default: false},
    acivationLink: {type: String}

})

module.exports = module('User', UserShema)