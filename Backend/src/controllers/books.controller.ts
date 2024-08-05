import { Request, Response } from "express";
import { BooksModel } from "../models/books.models";
export const getAllBooks = async (req: Request, res: Response) => {
  console.log(req, res);
  try {
    const getBooks = await BooksModel.find();
    res.status(200).send(getBooks);
  } catch (error) {
    res.status(400).send(error);
  }
};
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

export const updateBooks = async (req: Request, res: Response) => {
  const {
    title,
    author,
    genre,
    publishedDate,
    summary,
    coverImageUrl,
    synopsis,
    idUser,
  } = req.body;
  const { userId } = req.params;
  try {
    const bookUpdated = await BooksModel.findByIdAndUpdate(
      { _id: userId },
      {
        title,
        author,
        genre,
        publishedDate,
        summary,
        coverImageUrl,
        synopsis,
        idUser,
      },
      { new: true }
    );
    res.status(200).send(bookUpdated);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

export const deleteBooks = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const deletedBook = await BooksModel.findByIdAndDelete({ _id: userId });
    res.status(200).send(deletedBook);
  } catch (error) {
    res.status(400).send(error);
  }
};
