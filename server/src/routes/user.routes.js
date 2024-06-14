import express from "express";
import {
  deleteUser,
  logout,
  register,
} from "../Controllers/user.controller.js";
import { authentication } from "../middlewares/user.middleware.js";
import {
  loginController,
  signupController,
} from "../Controllers/auth.controller.js";

const userRouter = express.Router();

userRouter.post("/signup", signupController);
userRouter.post("/login", loginController);
userRouter.post("/logout", logout);
userRouter.delete("/:id", authentication, deleteUser);

export default userRouter;
