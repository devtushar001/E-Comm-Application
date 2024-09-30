import categoryModel from "../models/categoryModel.js";

// create category
export const createCategory = async (req, res) => {
    try {
        const { Category } = req.body;
    
        if (!Category === '') {
            return res.status(500).send({
                success: false,
                message: 'Category is required'
            });
        }
    
        await categoryModel.create({ name: Category });
        res.status(201).send({
            success: true,
            message: `${Category} Created Successfully!`
        });
    
    } catch (error) {
        console.error('Error creating category:', error.message);
        return res.status(500).send({
            success: false,
            message: 'Problem in category API'
        });
    }
    
}