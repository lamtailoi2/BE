import userModel from "../models/users.js";
import asyncHandler from "../util.js";


const register = asyncHandler(async (username, password, next) => {
    const foundUser = userModel.findOne({
        username,
        password
    })
    if (foundUser)
        throw new Error('User is already existed')
    userModel.create({
        username,
        password
    })
}) 

export  default register