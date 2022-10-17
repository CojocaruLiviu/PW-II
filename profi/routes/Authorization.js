const Router = require('express')
const router = new Router()
const controller = require('../Controllers/authController')
const {check} = require("express-validator")
const authMiddleware = require('../connect/authMiddleware')
const roleMiddleware = require('../connect/roleMiddleware')

router.post('/registration', 
[
    check('username', "Username can't be empty").notEmpty(),
    check('password', "Password must be more than 2 and less than 10 characters").isLength({min:2, max:10})
],
controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(["ADMIN","USER"]),controller.getUsers)

module.exports = router
