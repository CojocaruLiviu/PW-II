const Movie = require('../models').Movie

class MoviesRepository {
    async getAll(fields = undefined) {
        return await Movie.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Movie.findByPk(id)
    }

    async create(Movie) {
        return await Movie.create(Movie)
    }

    async update(id, Movie) {
        const existingMovie = await Movie.findByPk(id)
        if (existingMovie) {
            return await existingMovie.update(Movie);
        }
        return null;
    }

    async delete(id) {
        return await Movie.destroy({
            where: { id: id }
        })
    }
}

module.exports = new MoviesRepository()