const MoviesRepository = require('../../database/repositories/MoviesRepository')
const UsersRepository = require('../../database/repositories/UsersRepository')
const GenresRepository = require('../../database/repositories/GenresRepository')

class MoviesService {
    async getAll(fields = undefined) {
        return await MoviesRepository.getAll(fields)
    }

    async getOne(id) {
        return await MoviesRepository.getOne(id)
    }

    async create(Movie) {
        return await MoviesRepository.create(Movie)
    }

    async update(id, Movie) {
        const existingMovie = await MoviesRepository.getOne(id)
        if (existingMovie) {
            return await existingMovie.update(Movie);
        }
        return null;
    }

    async delete(id) {
        return await MoviesRepository.delete(id)
    }

    async getUsers(movieId, fields) {
        return await UsersRepository.getAllOfMovie(movieId, fields);
    }

    async getGenres(movieId, fields) {
        return await GenresRepository.getAllOfMovie(movieId, fields);
    }
}

module.exports = new MoviesService()