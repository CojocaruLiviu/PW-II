const Mov_Genres = require('../models').Mov_genr

class Mov_GenresRepository {
    async getAll(fields = undefined) {
        return await Mov_Genres.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Mov_Genres.findByPk(id)
    }

    async create(genre) {
        return await Mov_Genres.create(genre)
    }

    async update(id, genre) {
        const existingGenre = await Mov_Genres.findByPk(id)
        if (existingGenre) {
            return await existingGenre.update(genre);
        }
        return null;
    }

    async delete(id) {
        const deletedGenre = await Mov_Genres.destroy({
            where: { id: id }
        })
        if (deletedGenre) {
            return {};
        }
        return null;
    }

   
   
}

module.exports = new Mov_GenresRepository()