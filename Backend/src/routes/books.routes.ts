import { Router } from "express";
import {
  deleteBooks,
  createBooks,
  updateBooks,
  getAllBooks,
} from "../controllers/books.controller";

export const booksRoutes = Router();

booksRoutes.get("/", getAllBooks);
booksRoutes.post("/", createBooks);
booksRoutes.patch("/:userId", updateBooks);
booksRoutes.delete("/:userId", deleteBooks);
