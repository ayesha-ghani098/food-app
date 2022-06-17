import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    id:{
        type:String,
        required: [true, "Please provide a id"],
    },
    name:{
        type: String,
        required: [true, "Please provide a name"],
    },
    description:{
        type: String,
        required: [true, "Please provide description"],
    },
    image:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:  [true, "Please provide price"],
    }
},{timestamps:true}
);

const productModel = mongoose.model('product',productSchema);
export default productModel;