import express from "express";
import mongoose from "mongoose";
// create server
const server = express();

server.use("/", (res, req) => {
  res.send("Bienvenue chez nous");
});
server.use("/user", userRouter);
server.use("/manga", mangaRouter);
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
  console.log("Server is running on port 3000");
});
