const router = require('express').Router()
const { login, register, updateUserProfile } = require('../controllers/userCtrl')
const { auth } = require('../middlewares/auth')

router.post('/register', register)
router.post('/login', login)

router.patch('/update', auth, updateUserProfile)

module.exports = router