import { Router } from 'express'
import RegisterController from '../controllers/register.controller.js'
import asyncHandler from '../utils/asyncHandler.js';

const router = Router();

router
    .route('/register')
    .get(asyncHandler(RegisterController._render))
    .post(asyncHandler(RegisterController.register))

export default router
