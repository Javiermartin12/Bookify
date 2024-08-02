import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  updateUser,
} from "../controllers/user.controller";

export const userRoutes = Router();
userRoutes.get("/", getAllUser);
userRoutes.post("/", createUser);
userRoutes.patch("/", updateUser);
userRoutes.delete("/", deleteUser);
