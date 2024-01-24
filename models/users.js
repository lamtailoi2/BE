import { Schema, model } from "mongoose";
const userSchema = new Schema({
    username: { type: String, require: true },
    password: { type: String, require: true },
}, {
    collection: 'users'
})

const userModel = model('users', userSchema)
export default userModel
