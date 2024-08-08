import { model, Schema } from "mongoose";
import { IBooksSchema } from "../interfaces/books.interfaces";

const bookSchema = new Schema<IBooksSchema>(
  {
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true, unique: true },
    genre: { type: String, required: true },
    publishedDate: { type: Date, required: true },
    coverImageUrl: { type: String },
    synopsis: { type: String },
    nameUser: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const BooksModel = model<IBooksSchema>("Books", bookSchema);
