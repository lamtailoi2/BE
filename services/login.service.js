import userModel from "../models/users.js";
import asyncHandler from "../util.js";


const login = async (username, password, next) => {
    const foundUser = await userModel.findOne({
        username,
        password
    })
    if (!foundUser)
        throw new Error('User is not existed')
    
}

export  default login