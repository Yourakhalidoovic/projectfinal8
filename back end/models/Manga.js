import mongoose from "mongoose";
const newshema = new mongoose.Schema({});
const product = mongoose.model("product", newshema);
export default product;
