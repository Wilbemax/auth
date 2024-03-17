const jwt = require('jsonwebtoken')
const tokenModule = require('../models/token-module')

class tokenService {
    generateToken(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '60m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await tokenModule.findOne({user: userId})
        if (tokenData) {
            tokenData.refreshToken =  refreshToken
            return await tokenData.save()
        }
        const token = await tokenModule.create({user: userId, refreshToken})
        return token
    }
}

module.exports = new tokenService()