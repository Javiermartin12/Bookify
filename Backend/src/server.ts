import express from "express";
import { userRoutes } from "./routes/user.routes";
import { booksRoutes } from "./routes/books.routes";
import cors from "cors";
import { genreRoute } from "./routes/genre.routes";

export const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/books", booksRoutes);
app.use("/api/genre", genreRoute);
