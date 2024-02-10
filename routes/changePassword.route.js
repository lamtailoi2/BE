import changePasswordController from "../controllers/changePassword.controller.js"
import { Router } from 'express'
import asyncHandler from '../utils/asyncHandler.js';
const router = Router()

router
    .route('/changepassword')
    .get(asyncHandler(changePasswordController._render))
    .patch(asyncHandler(changePasswordController.changePassword))

export default router