const MoviesService = require('../services/MoviesService')

class MoviesController{
    async getAll(request, response){
        try{
            return await response.status(200).json(await MoviesService.getAll([
                'id',
                'name',
                'year',
                'time'
            ]))
        } catch(error){
            return await response.status(500).json(JSON.stringify(error))
        }
    }

    async getOne(request, response){
        try{
            const country = await MoviesService.getOne(request.params.id)
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
            return response.status(200).json(await MoviesService.create(request.body));
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async update(request, response){
        try{
            const existingCountry = await MoviesService.getOne(request.params.id)
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
            return response.status(200).json(await MoviesService.delete(request.params.id))
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async getGenres(request, response){
        try{
            return response.status(200).json(await MoviesService.getGenres(
                request.params.id, 
                ['id', 'name']
            ))
        } catch(error){
            return response.status(500).json(JSON.stringify(error))
        }
    }
    
    async getUsers(request, response){
        try{
            return response.status(200).json(await MoviesService.getUsers(
                request.params.id, 
                ['id', 'name']
            ))
        } catch(error){
            return response.status(500).json(JSON.stringify(error))
        }
    }
}

module.exports = new MoviesController()