import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  registerUserWithAuth0,
  updateUser,
} from "../controllers/user.controller";

export const userRoutes = Router();
userRoutes.get("/", getAllUser);
userRoutes.post("/", createUser);
userRoutes.post("/register", registerUserWithAuth0);
userRoutes.patch("/:userId", updateUser);
userRoutes.delete("/:userId", deleteUser);
