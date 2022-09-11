class CountriesController{
    getAll(request, response){
        return response.json([
            {
                id: 1,
                name: "Moldova",
                code: "MD",
                flag: null,
                area: 1400000,
                population: 2890321
            }
        ])
    }

    getOne(request, response){
        return response.json([
            {
                id: request.params.id,
                name: "Moldova",
                code: "MD",
                flag: null,
                area: 1400000,
                population: 2890321
            }
        ])
    }

    create(request, response){
        const country = request.body;
        country.id = 1; 
        return response.json(country);
    }

}

module.exports = new CountriesController()