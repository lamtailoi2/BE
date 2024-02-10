import userService from '../services/register.js';
import validator from 'validator';
import jwt from 'jsonwebtoken'
import AppError from '../core/errorhandler.js';

const _render = (req, res) => {
    res.render('users/register')
};

const register = async (req, res, next) => {
    const { username, password, email, comfirmPassword } = req.body;
    if (!validator.isEmail(email))
        throw new AppError("Please input valid email", 401)
    if (comfirmPassword !== password)
        throw new AppError("Check your comfirm password", 401)
    const token = await userService(username, password, email)
    res.status(201).json({
        status: 'successful',
        token,
    })
    }
export default { register, _render }