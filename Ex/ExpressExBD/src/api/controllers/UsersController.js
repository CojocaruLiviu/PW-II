const UsersService = require('../services/UsersService')

class UsersController{
    async getAll(request, response){
        try{
            return await response.status(200).json(await UsersService.getAll([
                'id',
                'name'
            ]))
        } catch(error){
            return await response.status(500).json(JSON.stringify(error))
        }
    }

    async getOne(request, response){
        try{
            const user = await UsersService.getOne(request.params.id)
            if(user){
                return response.status(200).json(user)
            }
            return response.status(404).json()
        } catch(error){
            return response.status(500).json(JSON.stringify(error))
        }
    }

    async create(request, response){
        try{
            return response.status(200).json(await UsersService.create(request.body));
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async update(request, response){
        try{
            const existingUser = await UsersService.getOne(request.params.id)
            if(existingUser){
                return response.status(200).json(await existingUser.update(request.body));
            }
            return response.status(404).json();
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async delete(request, response){
        try{
            return response.status(200).json(await UsersService.delete(request.params.id))
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }
}

module.exports = new UsersController()