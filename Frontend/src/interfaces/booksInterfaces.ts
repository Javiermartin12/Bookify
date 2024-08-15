import { Genre } from "./genreInterfaces";

export interface BookInterface {
  _id?: string;
  title: string;
  author: string;
  genre: Genre[];
  publishedDate: Date;
  coverImageUrl: string;
  synopsis: string;
  nameUser: string;
}
