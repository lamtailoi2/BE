import changePasswordServ from "../services/changePassword.service.js";

const _render = (req, res) => {
    res.render('users/changepassword')
}

const changePassword = async (req, res, next) => {
    const { email, password, newpassword, comfirmPassword } = req.body
    if (!comfirmPassword === newpassword) {
        throw new Error("Check your comfirm password again")
    }
    await changePasswordServ(password, newpassword, email,)
    res.send("Your password was changed")
}

export default {_render, changePassword}