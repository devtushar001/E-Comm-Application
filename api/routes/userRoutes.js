import express from 'express';
import { registerController, loginController, getUserProfileController, logoutController, updateProfileConroller, updatePasswordController, updateProfilePicController} from '../controllers/userController.js';
import { isAuth } from '../middlewares/AutheMiddleware.js';
import { singleUpload } from '../middlewares/multer.js';

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
// update password
router.put('/update-password',isAuth, updatePasswordController);


// update profile pic
router.put('/update-picture', isAuth, singleUpload, updateProfilePicController)
export default router;