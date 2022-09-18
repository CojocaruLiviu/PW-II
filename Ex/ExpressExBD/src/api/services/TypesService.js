const TypesRepository = require('../../database/repositories/TypesRepository')

class TypesService {
    async getAll(fields = undefined) {
        return await TypesRepository.getAll(fields)
    }

    async getOne(id) {
        return await TypesRepository.getOne(id)
    }

    async create(region) {
        return await TypesRepository.create(region)
    }

    async update(id, region) {
        const existingLocation = await TypesRepository.getOne(id)
        if (existingLocation) {
            return await existingLocation.update(region);
        }
        return null;
    }

    async delete(id) {
        return await TypesRepository.delete(id)
    }
}

module.exports = new TypesService()