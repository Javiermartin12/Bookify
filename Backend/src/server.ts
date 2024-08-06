import express from "express";
import { userRoutes } from "./routes/user.routes";
import { booksRoutes } from "./routes/books.routes";
import cors from "cors";

export const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
//middleware
app.use(express.json());
app.use("/user", userRoutes);
app.use("/books", booksRoutes);
