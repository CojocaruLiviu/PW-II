const { Op } = require("sequelize");
const UserRepository = require('./UsersRepository')
const Genre = require('../models').Genre

class GenresRepository {
    async getAll(fields = undefined) {
        return await Genre.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Genre.findByPk(id)
    }

    async create(user) {
        return await Genre.create(user)
    }

    async update(id, Genre) {
        const existingGenre = await Genre.findByPk(id)
        if (existingGenre) {
            return await existingGenre.update(Genre);
        }
        return null;
    }

    async delete(id) {
        return await Genre.destroy({
            where: { id: id }
        })
    }

    async getAllOfuser(userId, fields = undefined) {
        return await Genre.findAll({
            where: { userId: userId },
            attributes: fields
        })
    }

    async getAllOfMovie(movieId, fields = undefined) {
        const user = await UserRepository.getAllOfMovie(movieId, ['id'])
        
        return await Genre.findAll({
            where: {
                userId: { [Op.in]: user.map(user => user.id) }
            },
            attributes: fields
        })
    }
}

module.exports = new GenresRepository()