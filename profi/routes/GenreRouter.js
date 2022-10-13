const Router = require("express");
const router = new Router();
 
const controller = require('../controllers/GenreController')

router.post('/genre', controller.create)
router.get('/genre', controller.getAll)
router.get('/genre/:id', controller.getOne)

module.exports = router
