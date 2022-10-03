const UsersRepository = require('../../database/repositories/UsersRepository')
const GenresRepository = require('../../database/repositories/GenresRepository')

class UsersService {
    async getAll(fields = undefined) {
        return await UsersRepository.getAll(fields)
    }

    async getOne(id) {
        return await UsersRepository.getOne(id)
    }

    async create(User) {
        return await UsersRepository.create(User)
    }

    async update(id, User) {
        const existingUser = await UsersRepository.getOne(id)
        if (existingUser) {
            return await existingUser.update(User);
        }
        return null;
    }

    async delete(id) {
        return await UsersRepository.delete(id)
    }

    async getGenres(UserId) {
        return await GenresRepository.getAllOfUser(UserId)
    }
}

module.exports = new UsersService()