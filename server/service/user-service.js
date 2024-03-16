const UserModule = require('../models/user-module')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const {uuidV4} = require("mongodb/src/utils");
const mailServise = require('../service/mail-service')
class  UserService {
    async registration(email, password){
        const candidate = await UserModule.findOne({email})
        if (candidate) {
            throw new Error(`Пользователь с почтой ${email} существует `)
        }
        const hashPassword = await bcrypt.hash(password,3)
        const activationLink = uuid.v4()
        const user = await UserModule.create({email, hashPassword:password, activationLink})
        await  mailServise.sendAcrivationMail(email, activationLink)
    }
}

module.exports = new UserService()

//27.07