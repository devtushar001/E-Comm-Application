import express from 'express';
import { registerController, homeController } from '../controllers/userController.js';

// router object
const router = express.Router()

// routes
router.get('/', homeController)
router.post('/register', registerController)

export default router;