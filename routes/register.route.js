import { Router } from 'express'
import UserController from '../controllers/register.controller.js'
import asyncHandler from '../util.js';

const router = Router();

router.get('/register', asyncHandler(UserController._render))

router.post('/register', asyncHandler(UserController.register))

export default router
