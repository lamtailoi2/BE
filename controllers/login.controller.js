import loginService from "../services/login.service.js";


const _render = (req, res) => {
    res.render('users/login')
}

const login = async (req, res, next) => {
    const { username, password} = req.body;
    await loginService(username, password)

    res.redirect("/logged")
    // res.send('Login successfully')
}

export default { _render,login }