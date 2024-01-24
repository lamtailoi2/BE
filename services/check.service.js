import userModel from "../models/users.js";

const logged = async (username, password, next) => {
    const foundUser = await userModel.findOne({
        username,
        password
    })
    if (!foundUser)
        throw new Error('User is not existed')

}

export  default logged