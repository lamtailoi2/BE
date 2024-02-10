import { Schema, model } from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt'
const userSchema = new Schema({
    username: { type: String, require: true },
    password: { type: String, require: true },
    email: { type: String, require: true, unique: true, lowercase: true, validate: validator.isEmail, select: false },
    comfirmPassword: {
        type: String,
        require: true,
        validator: function (el) {
            return el === this.password;
        }
    }
}, {
    collection: 'users'
})

userSchema.pre('save', async function (next) {
   // Only run this function if password was actually modified
    if (!this.isModified('password'))
        return next();
    this.password = await bcrypt.hash(this.password, 12)
    this.comfirmPassword = undefined;
    next();


})

userSchema.method('correctPassword', async (candidatePassword, userPassword) => {
    return await bcrypt.compare(candidatePassword, userPassword);
}) 


const userModel = model('users', userSchema)
export default userModel
