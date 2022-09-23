const Genre = require('../models').Genre

class GenresRepository {
    async getAll(fields = undefined) {
        return await Genre.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Genre.findByPk(id)
    }

    async create(genre) {
        return await Genre.create(genre)
    }

    async update(id, genre) {
        const existingGenre = await Genre.findByPk(id)
        if (existingGenre) {
            return await existingGenre.update(genre);
        }
        return null;
    }

    async delete(id) {
        const deletedGenre = await Genre.destroy({
            where: { id: id }
        })
        if (deletedGenre) {
            return {};
        }
        return null;
    }

    async getAllOfMovie(movieId, fields = undefined) {
        return await Genre.findAll({
            where: { movieId: movieId },
            attributes: fields
        })
    }
}

module.exports = new GenresRepository()