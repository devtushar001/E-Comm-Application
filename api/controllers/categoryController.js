import categoryModel from "../models/categoryModel.js";

// create category
export const createCategoryController = async (req, res) => {
    try {
        const { category } = req.body;
        console.log(category)
        if (!category) {
            return res.status(500).send({
                success: false,
                message: 'Category is required'
            });
        }

        await categoryModel.create({ category });
        res.status(201).send({
            success: true,
            message: `${category} category Created Successfully!`
        });

    } catch (error) {
        console.error('Error creating category:', error.message);
        return res.status(500).send({
            success: false,
            message: 'Problem in category API'
        });
    }

}

// get all category controller 

export const getAllcategoryController = async (req, res) => {
    try {
        const categories = await categoryModel.find();

        if (!categories) {
            return res.status(404).send({
                success: false,
                message: "Categories not found"
            })
        }

        res.status(200).send({
            success: true,
            message: "All Category Fetched Successfully",
            categories
        })
        // const cat = categories;
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'problem in get all category api'
        })
    }
}