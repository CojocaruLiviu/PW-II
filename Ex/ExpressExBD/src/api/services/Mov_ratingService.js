const GenresRepository = require('../../database/repositories/Mov_RatingsRepository')

class Mov_genrsService {
    async getAll(fields = undefined) {
        return await GenresRepository.getAll(fields)
    }

    async getOne(id) {
        return await GenresRepository.getOne(id)
    }

    async create(genre) {
        return await GenresRepository.create(genre)
    }

    async update(id, genre) {
        const existingGenre = await GenresRepository.getOne(id)
        if (existingGenre) {
            return await existingGenre.update(genre);
        }
        return null;
    }

    async delete(id) {
        return await GenresRepository.delete(id)
    }

    async getLocations(genreId) {
        return await GenresRepository.getAllOfGenre(genreId)
    }
}

module.exports = new Mov_genrsService()