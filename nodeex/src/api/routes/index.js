const Router = require('express')
const router = new Router()

const modules = ['movies', 'users', 'genres']

modules.forEach(module => {
    router.use(`/${module}`, require(`./${module}`))
})

module.exports = router