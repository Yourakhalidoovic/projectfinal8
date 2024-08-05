import { request } from "express";
import Produit from "../models/Produit.js";
export async function createProduit(request, response) {
  try {
    const ProduitInfo = request.body;
    const createdProduit = await Produit.create(ProduitInfo);
    //after insertion
    response.send({
      message: "Produit CREATED with success",
      newProduit: createdProduit,
    });
  } catch (error) {
    response.send(`Error : ${error}`);
  }
}
export async function updateProduit(request, response) {
  const updatedProduit = await Produit.findAndUpdate(request.body);
  response.send({ Produit: updatedProduit });
}

export async function deleteProduit(request, response) {
  const deletedProduit = await Food.findAndDelete(request.body);
  response.send({ Produit: deletedProduit });
}
export async function getUserProduit(request, response) {
  find();
}
export async function getProduit(request, response) {
  try {
    const Produits = await Produit.find(); // Fetch all products
    response.json(Produits);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Server Error" });
  }
}
