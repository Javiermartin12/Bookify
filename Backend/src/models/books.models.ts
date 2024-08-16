import { model, Schema } from "mongoose";
import { IBooksSchema } from "../interfaces/books.interfaces";

const bookSchema = new Schema<IBooksSchema>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: [String],
    publishedDate: { type: Date },
    coverImageUrl: { type: String },
    synopsis: { type: String },
    nameUser: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const BooksModel = model<IBooksSchema>("Books", bookSchema);
