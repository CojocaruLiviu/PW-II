const Movie = require('../models').Movie

class CountriesRepository {
    async getAll(fields = undefined) {
        return await Movie.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Movie.findByPk(id)
    }

    async create(country) {
        return await Movie.create(country)
    }

    async update(id, country) {
        const existingCountry = await Movie.findByPk(id)
        if (existingCountry) {
            return await existingCountry.update(country);
        }
        return null;
    }

    async delete(id) {
        return await Movie.destroy({
            where: { id: id }
        })
    }
}

module.exports = new CountriesRepository()