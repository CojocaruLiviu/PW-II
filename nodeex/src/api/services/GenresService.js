const GenresRepository = require('../../database/repositories/GenresRepository')

class GenresService {
    async getAll(fields = undefined) {
        return await GenresRepository.getAll(fields)
    }

    async getOne(id) {
        return await GenresRepository.getOne(id)
    }

    async create(region) {
        return await GenresRepository.create(region)
    }

    async update(id, region) {
        const existingUsers = await GenresRepository.getOne(id)
        if (existingUsers) {
            return await existingUsers.update(region);
        }
        return null;
    }

    async delete(id) {
        return await GenresRepository.delete(id)
    }
}

module.exports = new GenresService()