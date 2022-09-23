const MoviesRepository = require('../../database/repositories/MoviesRepository')
const GenresRepository = require('../../database/repositories/GenresRepository')
const ReviewsRepository = require('../../database/repositories/Mov_ratingsRepository')

class MoviesService {
    async getAll(fields = undefined) {
        return await MoviesRepository.getAll(fields)
    }

    async getOne(id) {
        return await MoviesRepository.getOne(id)
    }

    async create(genre) {
        return await MoviesRepository.create(genre)
    }

    async update(id, genre) {
        const existingGenre = await MoviesRepository.getOne(id)
        if (existingGenre) {
            return await existingGenre.update(genre);
        }
        return null;
    }

    async delete(id) {
        return await MoviesRepository.delete(id)
    }

    async getRegions(genreId, fields) {
        return await GenresRepository.getAllOfGenre(genreId, fields);
    }

    async getLocations(genreId, fields) {
        return await TypesRepository.getAllOfType(genreId, fields);
    }
}

module.exports = new MoviesService()