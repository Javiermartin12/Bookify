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
  try {
    const {
      title,
      author,
      genre,
      publishedDate,
      coverImageUrl,
      synopsis,
      userId,
    } = req.body;

    const newBook = await BooksModel.create({
      title,
      author,
      genre,
      publishedDate,
      coverImageUrl,
      synopsis,
      userId,
    });
    res.status(200).send(newBook);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const singupBooksFromFront = async (req: Request, res: Response) => {
  try {
    const {
      title,
      author,
      genre,
      publishedDate,
      coverImageUrl,
      synopsis,
      userId,
    } = req.body;
    console.log({
      title,
      author,
      genre,
      publishedDate,
      coverImageUrl,
      synopsis,
      userId,
    });
    const newBook = new BooksModel({
      title,
      author,
      genre,
      publishedDate,
      coverImageUrl,
      synopsis,
      userId,
    });
    console.log(newBook);
    const savedBook = await newBook.save();
    res
      .status(200)
      .json({ message: "Book created successfully", book: savedBook });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error creating book", error });
  }
};

export const updateBooks = async (req: Request, res: Response) => {
  const {
    title,
    author,
    genre,
    publishedDate,
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
