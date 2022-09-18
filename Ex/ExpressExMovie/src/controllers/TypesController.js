class TypesController{
    getAll(request, response){
        return response.json([
            {
                id: 1,
                name: "Movies",
                
            },
            {
                id: 2,
                name: "Serials",
                
            },
            {
                id: 3,
                name: "Trailers",
                
            }
        ])
    }

    getOne(request, response){
        return response.json([
            {
                id: request.params.id,
                name: "Movies",
                
            }
        ])
    }

    create(request, response){
        const type = request.body;
        type.id = 1; 
        return response.json(type);
    }

    update(request, response){
        const type = request.body;
        type.id = request.params.id;
        return response.json(type);
    }

    delete(request, response){
        return response.json({});
    }
}

module.exports = new TypesController()