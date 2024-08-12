import express from "express";
import { userRoutes } from "./routes/user.routes";
import { booksRoutes } from "./routes/books.routes";
import cors from "cors";
import { jwtCheck } from "./middleware/check.jwt";

export const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use("/api/user", jwtCheck, userRoutes);
app.use("/api/books", booksRoutes);
