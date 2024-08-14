import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  registerUserWithAuth0,
  updateUser,
} from "../controllers/user.controller";
import { jwtCheck } from "../middleware/check.jwt";

export const userRoutes = Router();
userRoutes.get("/", getAllUser);
userRoutes.post("/", createUser);
userRoutes.post("/register", jwtCheck, registerUserWithAuth0);
userRoutes.patch("/:userId", jwtCheck, updateUser);
userRoutes.delete("/:userId", jwtCheck, deleteUser);
