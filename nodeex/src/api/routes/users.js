const Router = require("express");
const router = new Router();

const controller = require('../controllers/usersController')

router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.post('/', controller.create)
router.patch('/:id', controller.update)
router.delete('/:id', controller.delete);

router.get('/:id/genres', controller.getGenres)

module.exports = router