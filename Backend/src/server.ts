import express from "express";
import { userRoutes } from "./routes/user.routes";
import { booksRoutes } from "./routes/books.routes";

export const app = express();
//middleware
app.use(express.json());
app.use("/user", userRoutes);
app.use("/books", booksRoutes);
