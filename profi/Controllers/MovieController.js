const Movie = require('../models/Movie')
const { Model } = require('mongoose');


class MovieController {
    async create(request, response) {
        try {
            const {id, name, year, time} = request.body
            const candidate = await Movie.findOne({id})
            if (candidate) { 
                return response.status(400).json({message: "Movie with that id already exists"})
            }
            const user = new Movie({id, name ,year ,time})
            await user.save()
            return response.json({message: "Movie successfully registered"})

        } catch (e) {
            console.log(e)
            response.status(400).json({message: 'Add data error'})
        }
    }


    async getAll(request, response){
        try {
            const users = await Movie.find()
            response.json(users)
        } catch (e) {
            console.log(e)
        }
    }


    async getOne(request, response){
        try {
            const {id} = request.params
                    const candidate = await Movie.findOne({id} )
                return response.json(candidate)
            } catch (e) {
                console.log(e)
                response.status(400).json({message: 'Add data error'})
            }
    }

    async update(request, response){
        try{
            const {id, name, year, time} = request.params
            const candidate = await Movie.findOne({id})
            if (candidate) {
                candidate = candidate({name, year, time})
            }
            return response.status(404).json();
        } catch (e) {
            console.log(e)
            response.status(400).json({message: 'Add data error'})
        }
    }

    async delete(request, response){
        try{
            return response.status(200).json(await MovieService.delete(request.params.id))
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    
}

module.exports = new MovieController()
