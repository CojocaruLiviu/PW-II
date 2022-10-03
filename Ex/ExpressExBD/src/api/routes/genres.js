const Router = require("express");
const router = new Router();

const controller = require('../controllers/GenresController')

router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.post('/', controller.create)
router.patch('/:id', controller.update)
router.delete('/:id', controller.delete);

router.get('/:id/movies', controller.getMovies)

module.exports = router