import userModel from "../models/users.js";
import bcrypt from "bcrypt"

async function changePassword(oldpassword, newpassword, email) {
    const foundUser = await userModel.findOne({
        email
    })
    if (!foundUser) {
        throw new Error("Cant found user");
    }
    if (await (!bcrypt.compare(oldpassword, foundUser.password))) {
        throw new Error("Your oldpassword is wrong")
    }
    foundUser.updateOne({
        password: newpassword
    })
}

export default changePassword