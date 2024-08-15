import { model, Schema } from "mongoose";
import { IGenre } from "../interfaces/genre.interfaces";
const genreSchema = new Schema<IGenre>(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const GenreModel = model<IGenre>("Genre", genreSchema);
