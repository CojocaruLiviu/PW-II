
const Router = require('express')
const router = new Router()

const modules = ['movies','genres','types']

modules.forEach(module => {
    router.use(`/${module}`, require(`./${module}`))
})

module.exports = router
