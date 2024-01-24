import { Router } from 'express'
import LoggedController from '../controllers/logged.controller.js'
import asyncHandler from '../util.js';

const router = Router();

router.get('/', asyncHandler(LoggedController._render))



export default router
