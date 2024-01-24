import { Router } from 'express'
import RegisterController from '../controllers/register.controller.js'
import asyncHandler from '../util.js';

const router = Router();

router.get('/register', asyncHandler(RegisterController._render))

router.post('/register', asyncHandler(RegisterController.register))

export default router
