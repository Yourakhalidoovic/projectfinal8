import jwt from "jsonwebtoken";

export default function isAuthenticated(req, res, next) {
  const token = req.headers.authorization;
  try {
    const data = jwt.verify(token, "jwtSecret");
    console.log(data);

    req.userId = data.userId;

    next();
  } catch (error) {
    res.send({
      massage: "you are not authorized",
      error: error.message,
    });
  }
}
