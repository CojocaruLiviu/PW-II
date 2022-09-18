class MoviesController{
    getAll(request, response){
        return response.json([
            {
                id: 1,
                name: "SlenderMan",
                country:"Argentin",
                premiere: 2005,
                duration: 85,
                
            },
            {
                id: 2,
                name: "DoRevenge",
                country:"USA",
                premiere: 2022,
                duration: 118,
                
            },
            {
                id: 3,
                name: "Beast",
                country:"USA",
                premiere: 2022,
                duration: 93,
                
            }
        ])
    }

    getOne(request, response){
        return response.json([
            {
                id: request.params.id,
                name: "SlenderMan",
                country: "Argentin",
                premiere: 2005,
                duration: 85
            },
        ])
    }

    create(request, response){
        const movie = request.body;
        movie.id = 1; 
        return response.json(movie);
    }

    update(request, response){
        const movie = request.body;
        movie.id = request.params.id;
        return response.json(movie);
    }

    delete(request, response){
        return response.json({});
    }
}

module.exports = new MoviesController()