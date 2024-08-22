import { Request, Response } from "express";
import { GenreModel } from "../models/genre.models";

export const getGenres = async (req: Request, res: Response) => {
  try {
    const genres = await GenreModel.find();
    res.status(200).send(genres);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const createGenre = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const genre = await GenreModel.create({ name });
    res.status(200).send(genre);
  } catch (error) {
    res.status(400).send(error);
  }
};
