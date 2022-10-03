const User = require('../models').User

class UsersRepository {
    async getAll(fields = undefined) {
        return await User.findAll({attributes: fields})
    }

    async getOne(id) {
        return await User.findByPk(id)
    }

    async create(User) {
        return await User.create(User)
    }

    async update(id, User) {
        const existingUser = await User.findByPk(id)
        if (existingUser) {
            return await existingUser.update(User);
        }
        return null;
    }

    async delete(id) {
        const deletedUser = await User.destroy({
            where: { id: id }
        })
        if (deletedUser) {
            return {};
        }
        return null;
    }

    async getAllOfMovie(MovieId, fields = undefined) {
        return await User.findAll({
            where: { MovieId: MovieId },
            attributes: fields
        })
    }
}

module.exports = new UsersRepository()