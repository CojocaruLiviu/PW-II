
const authRepository = require('../../database/repositories/authRepository')

class UsersService {

    async registration(fields = undefined) {
        return await authRepository.registration(fields = undefined)
    }

    async login(fields = undefined) {
        return await authRepository.login(fields = undefined)
    }

    async getUsers(fields = undefined) {
        return await authRepository.getUsers(fields)
    }

   
}

module.exports = new UsersService()