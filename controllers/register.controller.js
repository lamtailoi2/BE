import userService from '../services/register.js';


const _render = (req, res) => {
    res.render('users/register')
};

const register = async (req, res, next) => {
    const { username, password } = req.body;
    await userService(username, password)
    res.send('Register Successfully')
}
export default { register, _render };