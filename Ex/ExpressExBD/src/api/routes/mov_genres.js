const Router = require("express");
const router = new Router();

const controller = require('../controllers/Mov_genreController')

router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.post('/', controller.create)
router.patch('/:id', controller.update)
router.delete('/:id', controller.delete);

module.exports = router