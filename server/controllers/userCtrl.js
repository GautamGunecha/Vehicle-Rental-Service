const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const register = asyncHandler(async (req, res) =>
{
    try
    {
        const { username, email, password } = req.body
        if (!username || !email || !password)
            return res.status(400).json({ msg: 'Enter requied fields' })

        const user = await User.findOne({ email })
        if (user)
            return res.status(400).json({ msg: 'User already registered' })

        const salt = await bcrypt.genSalt(13)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            username, email, password: hashPassword
        })

        await newUser.save()
        return res.status(200).json({ msg: 'User registered success.' })
    } catch (error)
    {
        return res.status(400).json({ msg: error })
    }
})
const login = asyncHandler(async (req, res) =>
{
    try
    {
        const { email, password } = req.body
        if (!email || !password)
            return res.status(400).json({ msg: 'Please enter required fields' })

        const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ msg: "User not found." })

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch)
            return res.status(400).json({ msg: "Incorrect Password" })

        const token = generateToken({ id: user._id })

        return res.status(200).json({
            token,
            _id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            avatar: user.avatar
        })
    } catch (error)
    {
        return res.status(400).json({ msg: error })
    }
})

const generateToken = payload =>
{
    return jwt.sign(payload, process.env.JWT_SECRET_KEY,
        { expiresIn: "7d" });
}

module.exports = { register, login }