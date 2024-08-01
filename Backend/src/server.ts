import express from "express";
import { userRoutes } from "./routes/user.routes";

export const app = express();
//middleware
app.use(express.json());
app.use("/user", userRoutes);
