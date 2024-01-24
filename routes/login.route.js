import { Router } from 'express'
import LoginController from '../controllers/login.controller.js'
import asyncHandler from '../util.js';

const router = Router();

router.get('/login', asyncHandler(LoginController._render))

router.post('/login', asyncHandler(LoginController.login))

export default router
