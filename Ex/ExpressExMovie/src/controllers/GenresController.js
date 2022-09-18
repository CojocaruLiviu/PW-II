class GenresController{
    getAll(request, response){
        return response.json([
            {
                id: 1,
                name: "Horror",
              
            },
            {
                id: 2,
                name: "Comedy",
                
            },
            {
                id: 3,
                name: "Biografy",
               
            }
        ])
    }

    getOne(request, response){
        return response.json([
            {
                id: request.params.id,
                name: "Horror",
               
            }
        ])
    }

    create(request, response){
        const genre = request.body;
        genre.id = 1; 
        return response.json(genre);
    }

    update(request, response){
        const genre = request.body;
        genre.id = request.params.id;
        return response.json(genre);
    }

    delete(request, response){
        return response.json({});
    }
}

module.exports = new GenresController()