import { Router } from 'express'
import LoginController from '../controllers/login.controller.js'
import authRouter from './check.route.js'
import asyncHandler from '../util.js';
import session from 'express-session';

const router = Router();




router.get('/login', asyncHandler(LoginController._render))

router.use(authRouter)

router.post('/login', asyncHandler(LoginController.login))

export default router
