import { Request, Response } from "express";
import { BooksModel } from "../models/books.models";

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const getBooks = await BooksModel.find();
    res.status(200).send(getBooks);
  } catch (error) {
    res.status(400).send(error);
  }
};
export const getBooksById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book = await BooksModel.findById(id);
    res.status(200).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
};
export const getBookByUser = async (req: Request, res: Response) => {
  try {
    const { nameUser } = req.params;

    const userBooks = await BooksModel.find({ nameUser });

    console.log("User books found:", userBooks);
    res.status(200).send(userBooks);
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
      nameUser,
    } = req.body;

    const newBook = await BooksModel.create({
      title,
      author,
      genre,
      publishedDate,
      coverImageUrl,
      synopsis,
      nameUser,
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
      nameUser,
    } = req.body;
    console.log({
      title,
      author,
      genre,
      publishedDate,
      coverImageUrl,
      synopsis,
      nameUser,
    });
    const newBook = new BooksModel({
      title,
      author,
      genre,
      publishedDate,
      coverImageUrl,
      synopsis,
      nameUser,
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
    nameUser,
  } = req.body;
  const { _id } = req.params;
  try {
    const bookUpdated = await BooksModel.findByIdAndUpdate(
      { _id: _id },
      {
        title,
        author,
        genre,
        publishedDate,
        coverImageUrl,
        synopsis,
        nameUser,
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

export const searchBooks = async (req: Request, res: Response) => {
  try {
    const { query } = req.params;
    console.log(query);
    const searchRegex = new RegExp(query, "i");
    const books = await BooksModel.find({
      $or: [
        { title: searchRegex },
        { author: searchRegex },
        { genre: searchRegex },
      ],
    });
    res.status(200).send(books);
  } catch (error) {
    res.status(500).send({ error: "Error searching for books" });
  }
};
