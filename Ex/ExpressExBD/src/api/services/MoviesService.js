const MoviesRepository = require('../../database/repositories/MoviesRepository')
const GenresRepository = require('../../database/repositories/GenresRepository')
const UsersRepository = require('../../database/repositories/UsersRepository')

class MoviesService {
    async getAll(fields = undefined) {
        return await MoviesRepository.getAll(fields)
    }

    async getOne(id) {
        return await MoviesRepository.getOne(id)
    }

    async create(movie) {
        return await MoviesRepository.create(movie)
    }

    async update(id, movie) {
        const existingmovie = await MoviesRepository.getOne(id)
        if (existingmovie) {
            return await existingmovie.update(movie);
        }
        return null;
    }

    async delete(id) {
        return await MoviesRepository.delete(id)
    }

    async getGenres(movieId, fields) {
        return await GenresRepository.getAllOfmovie(movieId, fields);
    }

    async getUsers(movieId, fields) {
        return await UsersRepository.getAllOfmovie(movieId, fields);
    }
}

module.exports = new MoviesService()