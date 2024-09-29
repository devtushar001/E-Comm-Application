// GET ALL PRODUCT CONTROLLER

import productModel from "../models/productModel.js";
import userModel from "../models/userModel.js";

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
        if(!singleProduct) {
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
        if(error.name === 'CastError') {
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