import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
   category: {
    type: String,
    required: [true, 'category is required']
   }
});

const categoryModel = mongoose.model('Category', categorySchema);
export default categoryModel;