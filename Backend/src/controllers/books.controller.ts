import { Request, Response } from "express";
import { UserModel } from "../models/users.models";
import { BooksModel } from "../models/books.models";
export const getAllBooks = async (req: Request, res: Response) => {};
export const createBooks = async (req: Request, res: Response) => {
  const {
    title,
    author,
    genre,
    publishedDate,
    summary,
    coverImageUrl,
    synopsis,
    userId,
  } = req.body;
  try {
    const newBook = await BooksModel.create({
      title,
      author,
      genre,
      publishedDate,
      summary,
      coverImageUrl,
      synopsis,
      userId,
    });
    res.status(200).send(newBook);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateBooks = async (req: Request, res: Response) => {};

export const deleteBooks = async (req: Request, res: Response) => {};
