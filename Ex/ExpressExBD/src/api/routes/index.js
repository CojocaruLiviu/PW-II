const Router = require('express')
const router = new Router()

const modules = ['movies', 'genres', 'mov_comms','mov_genres','mov_ratings','users']

modules.forEach(module => {
    router.use(`/${module}`, require(`./${module}`))
})

module.exports = router
