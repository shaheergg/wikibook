import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

export const comparePasswowrd = (password, hash) => {
  const match = bcrypt.compareSync(password, hash);
  return match;
};

export const hashPassword = (password) => {
  const hash = bcrypt.hashSync(password, 10);
  return hash;
};

export const createJWT = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET
  );

  return token;
};
