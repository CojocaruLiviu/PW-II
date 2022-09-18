const Genre = require('../models').Genre

class RegionsRepository {
    async getAll(fields = undefined) {
        return await Genre.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Genre.findByPk(id)
    }

    async create(region) {
        return await Genre.create(region)
    }

    async update(id, region) {
        const existingRegion = await Genre.findByPk(id)
        if (existingRegion) {
            return await existingRegion.update(region);
        }
        return null;
    }

    async delete(id) {
        const deletedRegion = await Genre.destroy({
            where: { id: id }
        })
        if (deletedRegion) {
            return {};
        }
        return null;
    }

    async getAllOfCountry(countryId, fields = undefined) {
        return await Genre.findAll({
            where: { countryId: countryId },
            attributes: fields
        })
    }
}

module.exports = new RegionsRepository()