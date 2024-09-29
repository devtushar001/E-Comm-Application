import express from 'express';
import { getAllProductController, getSingleProductController } from '../controllers/productController.js';
const productRouter = express.Router();

// routes
productRouter.get('/get-all', getAllProductController);

// get single product
productRouter.get('/:id', getSingleProductController);

export default productRouter;