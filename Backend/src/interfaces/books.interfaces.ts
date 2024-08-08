export interface IBooksSchema extends Document {
  title: string;
  author: string;
  genre: string;
  publishedDate: Date;
  coverImageUrl?: string;
  synopsis?: string;
  nameUser?: string;
}
