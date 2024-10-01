import express from 'express';
// import { Router } from 'express';
import { isAuth } from '../middlewares/AutheMiddleware.js';
import { createCategoryController, getAllcategoryController } from '../controllers/categoryController.js';

const categoryRouter = express.Router();

// create category
categoryRouter.post('/create', isAuth, createCategoryController);

// getAll category
categoryRouter.get('/get-all', isAuth, getAllcategoryController)

export default categoryRouter;