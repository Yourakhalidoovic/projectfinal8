import express from "express";
import { register, login, getUsers, updateUser, deleteUser } from "../controller/user";
import isAuthenticated from "../middlewares/authentification";
const userRouter = express.Router();
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/", getUsers);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
export default userRouter;