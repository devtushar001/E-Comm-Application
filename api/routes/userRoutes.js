import express from 'express';
import { registerController, loginController, getUserProfileController, logoutController } from '../controllers/userController.js';
import { isAuth } from '../middlewares/AutheMiddleware.js';

// router object
const router = express.Router()

// routes
// router.get('/', homeController)
router.post('/register', registerController);
//login route
router.post('/login', loginController);
// profiel
router.get('/profile', isAuth, getUserProfileController);
// logout 
router.get('/logout', isAuth, logoutController)

// login router
// router.post('/login', loginController);

export default router;