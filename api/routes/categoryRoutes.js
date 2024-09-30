import express from 'express';
// import { Router } from 'express';
import { isAuth } from '../middlewares/AutheMiddleware.js';
import { createCategory } from '../controllers/categoryController.js';

const categoryRouter = express.Router();

categoryRouter.post('/create', isAuth, createCategory)

export default categoryRouter;