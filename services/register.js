import userModel from "../models/users.js";

import jwt from 'jsonwebtoken'
import AppError from '../core/errorhandler.js'


const signToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN})
}

const register = async (username, password, email, comfirmPassword, next) => {
    
    const foundUser = await userModel.findOne({
        email,
    })
    if (foundUser)
        throw new AppError('User is existed', 401)

    const newUser = await userModel.create({
        username,
        email,
        password,
        comfirmPassword
    })
    const token = signToken(newUser._id)
    return token
}

export  default register
