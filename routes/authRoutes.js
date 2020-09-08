const { Router } = require('express')
const authCotrollers = require('../controllers/authControllers')

const router = Router()

router.get('/signup', authCotrollers.signup_get)
router.post('/signup', authCotrollers.signup_post)
router.get('/login', authCotrollers.login_get)
router.post('/login', authCotrollers.login_post)

module.exports = router
