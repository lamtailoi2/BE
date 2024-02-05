import { Router } from 'express'
import session from 'express-session';

const router = Router();

router.use(session({
    saveUninitialized: false,
    secret: "plapla",
    resave: false,
}))


router.use((req, res, next) => {
    if (req.session.user) {
        next();
    }
    else {
        req.session.user = {
            username: req.body.username,
        }
        next();
    }
})

export default router