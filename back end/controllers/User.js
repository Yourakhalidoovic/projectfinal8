import User from "../models/User.js ";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function register(request, response) {
  const userInfos = request.body;
  const password = userInfos.password;
  const hashedPassword = bcrypt.hashSync(password, 10);
  try {
    const user = await User.create({ ...userInfos, password: hashedPasswoes });
    response.send(user);
  } catch (error) {
    response.send({ error: error.message });
  }
}
export async function login(request, response) {
  const user = await User.findOne({ email: email });
  if (!user) {
    return response.send({ error: "User not found" });
  }
  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    return response.send({ error: "Password is not valid" });
  }
  const token = jwt.sign({ userid: user._id }, secretKey);
  response.send({ user: user, token: token });
}
export async function getUsers(request, response) {}
export async function updateUser(request, response) {}
export async function deleteUser(request, response) {}
