import userService from '../services/register.js';
import asyncHandler from '../util.js';

const _render = (req, res) => {
    res.render('users/register')
};

const register = asyncHandler(async (res, req, next) => {
    const { username, password } = req.body;
    await userService(username, password)
    .then(data => res.send('Register Successfully'))
})
export default { _render, register };