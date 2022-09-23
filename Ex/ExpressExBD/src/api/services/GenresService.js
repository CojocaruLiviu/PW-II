const GenresRepository = require('../../database/repositories/GenresRepository')
const TipesRepository = require('../../database/repositories/Mov_ratingsRepository')

class GenresService {
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
            return await existingRegion.update(genre);
        }
        return null;
    }

    async delete(id) {
        return await GenresRepository.delete(id)
    }

    async getLocations(genreId) {
        return await TipesRepository.getAllOfRegion(genreId)
    }
}

module.exports = new GenresService()