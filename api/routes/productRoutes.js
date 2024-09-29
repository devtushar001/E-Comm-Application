import express from 'express';
import { getAllProductController } from '../controllers/productController.js';
const productRouter = express.Router();

// routes
productRouter.get('/get-all', getAllProductController);

export default productRouter;