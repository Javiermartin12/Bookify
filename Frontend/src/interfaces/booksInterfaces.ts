export interface BookInterface {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  publishedDate: Date;
  coverImageUrl: string;
  synopsis: string;
  nameUser: User[];
}

export interface User {
  _id?: string;
  name: string;
}
