const Router = require("express");
const router = new Router();
 
const controller = require('../controllers/MovieController')

router.post('/movie', controller.create)
router.get('/movie', controller.getAll)
router.get('/movie/:id', controller.getOne)

module.exports = router
