const GenresRepository = require('../../database/repositories/GenresRepository')
const MoviesRepository = require('../../database/repositories/MoviesRepository')

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
            return await existingServices.update(genre);
        }
        return null;
    }

    async delete(id) {
        return await GenresRepository.delete(id)
    }

    async getMovies(id) {
        return await MoviesRepository.getAllOfServices(id)
    }
}

module.exports = new GenresService()