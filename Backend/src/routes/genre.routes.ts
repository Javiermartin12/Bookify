import { Router } from "express";
import { createGenre, getGenres } from "../controllers/genre.controller";

export const genreRoute = Router();

genreRoute.get("/", getGenres);
genreRoute.post("/", createGenre);
