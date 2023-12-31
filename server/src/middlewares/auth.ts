import * as jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer) {
    res.status(401);
    res.json({ message: "You need to login first" });
    return;
  }
  const [, token] = bearer.split(" ");

  if (!token) {
    res.status(401);
    res.json({ message: "You need to login first" });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401);
    res.json({ message: "You need to login first" });
    return;
  }
};
