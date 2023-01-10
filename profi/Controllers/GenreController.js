const Genre = require('../models/Genre')
const { Model } = require('mongoose');


class MovieController {
    async create(request, response) {
        try {
            const {id, name} = request.body
            const candidate = await Genre.findOne({id})
            if (candidate) { 
                return response.status(400).json({message: "Genre with that id already exists"})
            }
            const user = new Genre({id, name })
            await user.save()
            return response.json({message: "Genre successfully registered"})

        } catch (e) {
            console.log(e)
            response.status(400).json({message: 'Add data error'})
        }
    }


    async getAll(request, response){
        try {
            const users = await Genre.find()
            response.json(users)
        } catch (e) {
            console.log(e)
        }
    }


    async getOne(request, response){
        try {
            const {id} = request.params
                    const candidate = await Genre.findOne({id} )
                return response.json(candidate)
            } catch (e) {
                console.log(e)
                response.status(400).json({message: 'Add data error'})
            }
    }

    async update(request, response){
        try{
            const {id, name} = request.params
            const candidate = await Genre.findOne({id})
        
            if (candidate) { 
                return response.status(400).json({message: "Genre with that not exists"})
            }
            const user = new Genre({id, name })
            await user.save()
            return response.json({message: "Genre with that id exists"})

        } catch (e) {
            console.log(e)
            response.status(400).json({message: 'Add data error'})
        }
    }

    async delete(request, response){
        try{
            return response.status(200).json(await GenreService.delete(request.params.id))
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }
}

module.exports = new MovieController()
