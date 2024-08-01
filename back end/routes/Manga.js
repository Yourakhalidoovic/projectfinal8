import express from "express";
import {
  getMangas,
  getUserMangas,
  createManga,
  updateManga,
  deleteManga,
} from "../controllers/mangas.js";
const mangaRouter = express.Router();
mangaRouter.get("/", getMangas);
mangaRouter.get("/user", getUserMangas);
mangaRouter.post("/", createManga);
mangaRouter.put("/", updateManga);
mangaRouter.delete("/", deleteManga);

export default mangaRouter;
