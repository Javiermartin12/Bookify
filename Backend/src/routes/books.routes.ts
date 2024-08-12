import { Router } from "express";
import {
  deleteBooks,
  createBooks,
  updateBooks,
  getAllBooks,
  singupBooksFromFront,
} from "../controllers/books.controller";

export const booksRoutes = Router();

booksRoutes.get("/", getAllBooks);
booksRoutes.post("/", createBooks);
booksRoutes.post("/register", singupBooksFromFront);
booksRoutes.patch("/:userId", updateBooks);
booksRoutes.delete("/:userId", deleteBooks);
