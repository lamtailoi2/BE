import loginService from "../services/login.service.js";

const _render = (req, res) => {
    res.render('users/login')
}

const login = async (req, res, next) => {
    const { username, password} = req.body;
    await loginService(username, password)
    // res.send('Login Successfully')
    res.redirect("/logged/id")
}

export default { _render,login }