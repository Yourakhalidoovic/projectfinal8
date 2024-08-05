import express from "express";
import {
  register,
  login,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/User.js";

const UserRouter = express.Router();
UserRouter.post("/register", register);
UserRouter.post("/login", login);
UserRouter.get("/", getUsers);
UserRouter.put("/:id", updateUser);
UserRouter.delete("/:id", deleteUser);
export default UserRouter;
