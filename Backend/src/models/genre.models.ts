import { model, Schema } from "mongoose";
import { IGenreSchema } from "../interfaces/genre.interfaces";
const genreSchema = new Schema<IGenreSchema>(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const GenreModel = model<IGenreSchema>("Genre", genreSchema);
