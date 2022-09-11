
const Router = require("express");
const router = new Router();

const controller = require('../controllers/CountriesController')

router.get('/', controller.getAll)
module.exports = router