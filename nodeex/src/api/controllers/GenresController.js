const GenresService = require('../services/GenresService')

class GenresController{
    async getAll(request, response){
        try{
            return await response.status(200).json(await GenresService.getAll([
                'id',
                'name'
            ]))
        } catch(error){
            return await response.status(500).json(JSON.stringify(error))
        }
    }

    async getOne(request, response){
        try{
            const location = await GenresService.getOne(request.params.id)
            if(location){
                return response.status(200).json(location)
            }
            return response.status(404).json()
        } catch(error){
            return response.status(500).json(JSON.stringify(error))
        }
    }

    async create(request, response){
        try{
            return response.status(200).json(await GenresService.create(request.body));
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async update(request, response){
        try{
            const existingLocation = await GenresService.getOne(request.params.id)
            if(existingLocation){
                return response.status(200).json(await existingLocation.update(request.body));
            }
            return response.status(404).json();
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async delete(request, response){
        try{
            return response.status(200).json(await GenresService.delete(request.params.id))
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }
}

module.exports = new GenresController()