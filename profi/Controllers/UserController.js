const User = require('../models/User')
const { Model } = require('mongoose');


class MovieController {
    async create(request, response) {
        try {
            const {id, name} = request.body
            const candidate = await User.findOne({id})
            if (candidate) { 
                return response.status(400).json({message: "User with that id already exists"})
            }
            const user = new User({id, name })
            await user.save()
            return response.json({message: "User successfully registered"})

        } catch (e) {
            console.log(e)
            response.status(400).json({message: 'Add data error'})
        }
    }


    async getAll(request, response){
        try {
            const users = await User.find()
            response.json(users)
        } catch (e) {
            console.log(e)
        }
    }


    async getOne(request, response){
        try {
            const {id} = request.params
                    const candidate = await User.findOne({id} )
                return response.json(candidate)
            } catch (e) {
                console.log(e)
                response.status(400).json({message: 'Add data error'})
            }
    }

    async update(request, response){
        try{
            const {id, name, year, time} = request.params
            const candidate = await User.findOne({id})
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
            return response.status(200).json(await UserService.delete(request.params.id))
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }
}

module.exports = new MovieController()
