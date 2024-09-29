import express from 'express';
import { createProductController, getAllProductController, getSingleProductController, updateProductController } from '../controllers/productController.js';
import { isAuth } from '../middlewares/AutheMiddleware.js';
import { singleUpload } from '../middlewares/multer.js';
const productRouter = express.Router();

// routes
productRouter.get('/get-all', getAllProductController);

// get single product
productRouter.get('/:id', getSingleProductController);

// create product
productRouter.post('/create', isAuth, singleUpload, createProductController)


// update product
productRouter.put('/update/:id', isAuth, updateProductController)
export default productRouter;