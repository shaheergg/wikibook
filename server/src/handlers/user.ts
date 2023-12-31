import prisma from "../db";

import { comparePasswowrd, createJWT, hashPassword } from "../lib/auth";

export const createNewUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      password: hashPassword(req.body.password),
    },
  });

  const token = createJWT(user);

  res.json({ token });
};

export const signIn = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  });

  const isValid = comparePasswowrd(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.json({ message: "Invalid credentials" });
    return;
  }

  const token = createJWT(user);

  res.json({ token });
};
