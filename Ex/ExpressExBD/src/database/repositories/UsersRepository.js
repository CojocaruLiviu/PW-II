const Users = require('../models').User

class UsersRepository {
    async getAll(fields = undefined) {
        return await Users.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Users.findByPk(id)
    }

    async create(movie) {
        return await Users.create(movie)
    }

    async update(id, movie) {
        const existingMovie = await Users.findByPk(id)
        if (existingMovie) {
            return await existingMovie.update(movie);
        }
        return null;
    }

    async delete(id) {
        return await Users.destroy({
            where: { id: id }
        })
    }

    async getAllOMovie(id, fields = undefined) {
        return await Region.findAll({
            where: { id: id },
            attributes: fields
        })
    }

}

module.exports = new UsersRepository()