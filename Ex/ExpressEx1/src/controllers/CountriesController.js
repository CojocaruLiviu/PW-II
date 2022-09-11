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

}

module.exports = new CountriesController()