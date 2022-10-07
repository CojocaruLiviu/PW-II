const Users = require('../models').Users

class UsersRepository {
    async getAll(fields = undefined) {
        return await Users.findAll({attributes: fields})
    }

    async create(movie) {
        return await Users.create(movie)
    }
    


    async registration(fields = undefined) {
        return await Users.registration(fields = undefined)
    }

    async login(fields = undefined) {
        return await Users.login(fields = undefined)
    }

    async getUsers(fields = undefined) {
        return await Users.getUsers(fields)
    }

}

module.exports = new UsersRepository()