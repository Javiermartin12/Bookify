import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  updateUser,
} from "../controllers/user.controller";

export const userRoutes = Router();
userRoutes.get("/", getAllUser);
userRoutes.get("/", createUser);
userRoutes.get("/", updateUser);
userRoutes.get("/", deleteUser);
