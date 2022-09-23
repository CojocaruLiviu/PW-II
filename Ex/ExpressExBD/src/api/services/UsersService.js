const UsersRepository = require('../../database/repositories/UsersRepository')

class UsersService {
    async getAll(fields = undefined) {
        return await UsersRepository.getAll(fields)
    }

    async getOne(id) {
        return await UsersRepository.getOne(id)
    }

    async create(region) {
        return await UsersRepository.create(region)
    }

    async update(id, region) {
        const existingLocation = await UsersRepository.getOne(id)
        if (existingLocation) {
            return await existingLocation.update(region);
        }
        return null;
    }

    async delete(id) {
        return await UsersRepository.delete(id)
    }
}

module.exports = new UsersService()