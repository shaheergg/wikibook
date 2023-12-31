import express from "express";
import cors from "cors";
import router from "./router";
import { protect } from "./middlewares/auth";
import { createNewUser, signIn } from "./handlers/user";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", protect, router);

app.post("/user", createNewUser);
app.post("/signin", signIn);

export default app;
