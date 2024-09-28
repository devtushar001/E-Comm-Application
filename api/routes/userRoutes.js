import express from 'express';
import { registerController, loginController, getUserProfileController, logoutController, updateProfileConroller } from '../controllers/userController.js';
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

// update profile
router.put('/update-profile', isAuth, updateProfileConroller);

export default router;