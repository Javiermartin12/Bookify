import express from "express";
import { userRoutes } from "./routes/user.routes";
import { booksRoutes } from "./routes/books.routes";
import cors from "cors";
import { jwtCheck } from "./middleware/check.jwt";

export const app = express();

//middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/user", jwtCheck, userRoutes);
app.use("/books", booksRoutes);
