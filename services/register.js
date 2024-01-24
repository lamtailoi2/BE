import userModel from "../models/users.js";
import asyncHandler from "../util.js";


const register = async (username, password, next) => {
    const foundUser = await userModel.findOne({
        username
    })
    if (foundUser)
        throw new Error('User is already existed')
    userModel.create({
        username,
        password
    }) 
}

export  default register