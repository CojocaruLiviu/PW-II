const Movie = require('../models').Movie

class MoviesRepository {
    async getAll(fields = undefined) {
        return await Movie.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Movie.findByPk(id)
    }

    async create(movie) {
        return await Movie.create(movie)
    }

    async update(id, movie) {
        const existingMovie = await Movie.findByPk(id)
        if (existingMovie) {
            return await existingMovie.update(movie);
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