import LoggedService from '../services/check.service.js'


const _render = (req, res, next) => {
    res.render('users/logged')
}



export default {_render}