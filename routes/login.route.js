import { Router } from 'express'
import LoginController from '../controllers/login.controller.js'
import authRouter from './check.route.js'
import asyncHandler from '../utils/asyncHandler.js';
import session from 'express-session';

const router = Router();


router
    .route('/login')
    .get(asyncHandler(LoginController._render))
    .post(asyncHandler(LoginController.login))

export default router
