import { Router } from "express";
import {
  deleteBooks,
  createBooks,
  updateBooks,
  getAllBooks,
  singupBooksFromFront,
  getBooksById,
  getBookByUser,
  searchBooks,
} from "../controllers/books.controller";

export const booksRoutes = Router();

booksRoutes.get("/", getAllBooks);
booksRoutes.get("/by/:nameUser", getBookByUser);
booksRoutes.get("/:id", getBooksById);
booksRoutes.get("/search/:query", searchBooks);
booksRoutes.post("/", createBooks);

booksRoutes.post("/register", singupBooksFromFront);
booksRoutes.patch("/:userId", updateBooks);
booksRoutes.delete("/:userId", deleteBooks);
