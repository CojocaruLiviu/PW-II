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
            const country = await UsersService.getOne(request.params.id)
            if(country){
                return response.status(200).json(country)
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
            const existingCountry = await UsersService.getOne(request.params.id)
            if(existingCountry){
                return response.status(200).json(await existingCountry.update(request.body));
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