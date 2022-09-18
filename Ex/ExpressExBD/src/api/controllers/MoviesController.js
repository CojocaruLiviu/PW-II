const MoviesService = require('../services/MoviesService')

class CountriesController{
    async getAll(request, response){
        try{
            return await response.status(200).json(await MoviesService.getAll([
                'id',
                'name',
                'code'
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

    async getRegions(request, response){
        try{
            return response.status(200).json(await MoviesService.getRegions(
                request.params.id, 
                ['id', 'name', 'code']
            ))
        } catch(error){
            return response.status(500).json(JSON.stringify(error))
        }
    }

    async getLocations(request, response){
        try{
            return response.status(200).json(await MoviesService.getLocations(
                request.params.id, 
                ['id', 'name', 'regionId']
            ))
        } catch(error){
            return response.status(500).json(JSON.stringify(error))
        }
    }
}

module.exports = new CountriesController()