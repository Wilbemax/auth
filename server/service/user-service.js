const UserModule = require('../models/user-module')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailServise = require('../service/mail-service')
const tokenServise = require('../service/token-service')
const UserDto = require('../dtos/user-dto')

class UserService {
    async registration(email, password) {
        const candidate = await UserModule.findOne({email})
        if (candidate) {
            throw new Error(`Пользователь с почтой ${email} существует `)
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()
        const user = await UserModule.create({email, password: hashPassword, activationLink})
        await mailServise.sendAcrivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)

        const userDto = new UserDto(user)
        const tokens = tokenServise.generateToken({...userDto})
        await tokenServise.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }
    }
}

module.exports = new UserService()

