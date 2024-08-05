import express from "express";
import {
  getProduit,
  getUserProduit,
  createProduit,
  updateProduit,
  deleteProduit,
} from "../controllers/Produit.js";

const ProduitRouter = express.Router();
ProduitRouter.get("/", getProduit);
ProduitRouter.get("/user", getUserProduit);
ProduitRouter.post("/", createProduit);
ProduitRouter.put("/", updateProduit);
ProduitRouter.delete("/", deleteProduit);

export default ProduitRouter;
