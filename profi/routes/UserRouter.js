const Router = require("express");
const router = new Router();
 
const controller = require('../controllers/UserController')

router.post('/user', controller.create)
router.get('/user', controller.getAll)
router.get('/user/:id', controller.getOne)

module.exports = router
