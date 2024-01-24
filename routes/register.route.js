import { Router } from 'express'
import UserController from '../controllers/register.controller.js'
import exp from 'constants';

const router = Router();

router.get('/', UserController._render)

router.post('/', UserController.register)

export default router