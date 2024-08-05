import mongoose from "mongoose";

const newschema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});
const Produit = mongoose.model("Produit", newschema);
export default Produit;
