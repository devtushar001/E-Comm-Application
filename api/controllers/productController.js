// GET ALL PRODUCT CONTROLLER
import cloudinary from 'cloudinary';
import productModel from "../models/productModel.js";
// import userModel from "../models/userModel.js";
import getDataUri from "../utils/features.js";

export const getAllProductController = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.status(200).send({
            success: true,
            message: "all products fetched successfully",
            products
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in get all products api",
            error
        })
    }
}

export const getSingleProductController = async (req, res) => {
    try {
        const singleProduct = await productModel.findById(req.params.id);
        // validation 
        if (!singleProduct) {
            return res.status(500).send({
                success: false,
                message: "single product not found",
                singleProduct
            })
        }

        res.status(200).send({
            success: true,
            message: "Single product found Successfully"
        })
    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(500).send({
                success: false,
                message: 'Cast Error You should resolve product id in params'
            })
        }
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'single product api error not found'
        })
    }
}


// create product

export const createProductController = async (req, res) => {
    try {
        const { name, description, price, stock, Category } = req.body;
        console.log(req.body);
        if (!name || !description || !price || !stock) {
            return res.status(500).send({
                success: false,
                message: 'Please Provide All Product Fields'
            })
        }

        if (!req.file) {
            return res.status(500).send({
                success: false,
                message: 'You should upload product images'
            })
        }

        const file = getDataUri(req.file)
        const cdb = await cloudinary.v2.uploader.upload(file.content)
        const image = {
            public_id: cdb.public_id,
            url: cdb.secure_url
        }

        console.log(image);
        

        const insertedProduct = await productModel.create({
            name, description, price, Category, stock, images:[image]
        })

        console.log(insertedProduct)

        return res.status(201).send({
            success: true,
            message: 'product created successfully'
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'single product api error not found'
        })
    }
}