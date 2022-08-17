const jwt = require('jsonwebtoken')
const asyncHandler = require("express-async-handler");
const User = require('../models/userModel')


const auth = asyncHandler(async (req, res, next) =>
{
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    )
    {
        try
        {
            token = req.headers.authorization.split(" ")[1];
            const decoded =
                jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.user = await User.findById(decoded.id).select("-password");

            next();
        } catch (error)
        {
            res.status(401).json({ msg: "Not authorized, token failed" });
        }
    }

    if (!token)
    {
        res.status(401).json({ msg: "Not authorized, no token" });
    }
});

const adminVerification = asyncHandler(async (req, res, next) =>
{
    await protect(req, res, () =>
    {
        if (req.user.isAdmin)
        {
            next();
        } else
        {
            res.status(403).json("User not allowed!");
        }
    });
});

module.exports = { auth, adminVerification };