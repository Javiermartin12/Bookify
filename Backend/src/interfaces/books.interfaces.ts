export interface IBooksSchema extends Document {
  title: string;
  author: string;
  genre: string;
  publishedDate: Date;
  summary?: string;
  coverImageUrl?: string;
  synopsis?: string;
  idUser?: string;
}
