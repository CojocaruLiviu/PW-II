const Mov_Comm = require('../models').Mov_Comm

class Mov_CommRepository {
    async getAll(fields = undefined) {
        return await Mov_Comm.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Mov_Comm.findByPk(id)
    }

    async create(genre) {
        return await Mov_Comm.create(genre)
    }

    async update(id, genre) {
        const existingGenre = await Mov_Comm.findByPk(id)
        if (existingGenre) {
            return await existingGenre.update(genre);
        }
        return null;
    }

    async delete(id) {
        const deletedGenre = await Mov_Comm.destroy({
            where: { id: id }
        })
        if (deletedGenre) {
            return {};
        }
        return null;
    }

    async getAllOfMovie(movieId, fields = undefined) {
        return await Mov_Comm.findAll({
            where: { movieId: movieId },
            attributes: fields
        })
    }
}

module.exports = new Mov_CommRepository()