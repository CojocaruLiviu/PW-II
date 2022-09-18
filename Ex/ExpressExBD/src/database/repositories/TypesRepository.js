const { Op } = require("sequelize");
const RegionsRepository = require('./GenresRepository')
const Type = require('../models').Type

class LocationsRepository {
    async getAll(fields = undefined) {
        return await Type.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Type.findByPk(id)
    }

    async create(region) {
        return await Type.create(region)
    }

    async update(id, location) {
        const existingLocation = await Type.findByPk(id)
        if (existingLocation) {
            return await existingLocation.update(location);
        }
        return null;
    }

    async delete(id) {
        return await Type.destroy({
            where: { id: id }
        })
    }

    async getAllOfRegion(regionId, fields = undefined) {
        return await Type.findAll({
            where: { regionId: regionId },
            attributes: fields
        })
    }

    async getAllOfCountry(countryId, fields = undefined) {
        const regions = await RegionsRepository.getAllOfCountry(countryId, ['id'])
        
        return await Type.findAll({
            where: {
                regionId: { [Op.in]: regions.map(region => region.id) }
            },
            attributes: fields
        })
    }
}

module.exports = new LocationsRepository()