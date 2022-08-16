const router = require('express').Router()
const { login, register } = require('../controllers/userCtrl')

router.post('/register', register)
router.post('/login', login)

module.exports = router