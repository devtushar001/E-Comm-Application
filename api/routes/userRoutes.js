import express from 'express';
import { registerController, loginController } from '../controllers/userController.js';

// router object
const router = express.Router()

// routes
// router.get('/', homeController)
router.post('/register', registerController)
router.post('/login', loginController)

// login router
// router.post('/login', loginController);

export default router;