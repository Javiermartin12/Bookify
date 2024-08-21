import axiosInstance from "../axios.config";
import { BookInterface } from "../interfaces/booksInterfaces";

export const getBooks = async () => {
  try {
    const response = await axiosInstance.get("/api/books");
    return response.data;
  } catch (error) {
    console.error("Don't received books", error);
    throw error;
  }
};

export const getBooksById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/api/books/${id}`);
    return response.data;
  } catch (error) {
    console.error("Don't received books id", error);
    throw error;
  }
};
export const getBookByUser = async (nameUser: string) => {
  try {
    const user = await axiosInstance.get(`/api/books/by/${nameUser}`);
    return user.data;
  } catch (error) {
    console.error("Error fetching books by user", error);
    throw error;
  }
};

export const createBook = async (booksData: BookInterface) => {
  try {
    const response = await axiosInstance.post("/api/books/register", booksData);
    return response.data;
  } catch (error) {
    console.error("Book don't created", error);
    throw error;
  }
};
export const updateBook = async (id: string, booksData: BookInterface) => {
  try {
    const response = await axiosInstance.patch(`/api/books/${id}`, booksData);
    return response.data;
  } catch (error) {
    console.error("Book don`t  updated", error);
    throw error;
  }
};
export const deleteBook = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/api/books/${id}`);
    return response.data;
  } catch (error) {
    console.error("Book don`t book deleted", error);
    throw error;
  }
};

export const searchBooks = async (query: string) => {
  try {
    const response = await axiosInstance.get(`/api/books/search/${query}`);
    return response.data;
  } catch (error) {
    console.error("Book don`t book received", error);
    throw error;
  }
};
