const Mov_commService = require('../services/Mov_commService')

class Mov_commController{
    async getAll(request, response){
        try{
            return await response.status(200).json(await Mov_commService.getAll([
                'user_id',
                'movie_id',
                'movie_comm'
            ]))
        } catch(error){
            return await response.status(500).json(JSON.stringify(error))
        }
    }

    async getOne(request, response){
        try{
            const region = await Mov_commService.getOne(request.params.id)
            if(region){
                return response.status(200).json(region)
            }
            return response.status(404).json()
        } catch(error){
            console.log(error);
            return response.status(500).json(JSON.stringify(error))
        }
    }

    async create(request, response){
        try{
            return response.status(200).json(await Mov_commService.create(request.body));
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async update(request, response){
        try{
            const existingRegion = await Mov_commService.getOne(request.params.id)
            if(existingRegion){
                return response.status(200).json(await existingRegion.update(request.body));
            }
            return response.status(404).json();
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async delete(request, response){
        try{
            return response.status(200).json(await Mov_commService.delete(request.params.id))
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

}

module.exports = new Mov_commController()