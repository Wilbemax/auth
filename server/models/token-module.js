const {Shema, module} = require('mongoose')


const TokenShema =  new Shema({

    user:{type: Shema.Types.ObjectId, ref: 'User'},
    refreshToken:{type: String, required: true},


})

module.exports = module('Token', TokenShema)