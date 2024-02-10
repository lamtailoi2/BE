import userModel from "../models/users.js";
import AppError from "../core/errorhandler.js"
import jwt from 'jsonwebtoken'

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
}

const login = async (username, password, next) => {
    if (!username || !password)
        throw new AppError('Input your username or password', 401)
    const user = await userModel.findOne({
        username,
    }).select('+password')
    if (!user || !(await user.correctPassword(password, user.password)))
        throw new AppError('Input your username or password', 401)
    const token = signToken(user._id)
    return token;
}

export default login