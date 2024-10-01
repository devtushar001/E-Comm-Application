import express from 'express';
// import { Router } from 'express';
import { isAuth } from '../middlewares/AutheMiddleware.js';
import { createCategoryController, deleteCategoryController, getAllcategoryController, updateCategoryController } from '../controllers/categoryController.js';

const categoryRouter = express.Router();

// create category
categoryRouter.post('/create', isAuth, createCategoryController);

// getAll category
categoryRouter.get('/get-all', getAllcategoryController)

// delete category
categoryRouter.delete('/delete/:id', isAuth, deleteCategoryController)

// update category
categoryRouter.put('/update/:id', isAuth, updateCategoryController)
export default categoryRouter;