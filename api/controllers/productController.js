// GET ALL PRODUCT CONTROLLER

import productModel from "../models/productModel.js";

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
