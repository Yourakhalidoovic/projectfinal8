import express from "express";
import mongoose from "mongoose";
import UserRouter from "./routes/User.js";
import ProduitRouter from "./routes/Produit.js";

// create server

const server = express();

server.use("/", (request, response) => {
  response.send("Bienvenue chez nous");
});

server.use("/User", UserRouter);
server.use("/Produit", ProduitRouter);
mongoose
  .connect(
    "mongodb+srv://eren_yeager_1453:islamicworld1453@cluster0.lhb5c.mongodb.net/code213-younes?retryWrites=true&w=majority&appName=Cluster0",
    {}
  )
  .then(function () {
    console.log("Connected to MongoDB");
  });
// listen to port 8000
server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
