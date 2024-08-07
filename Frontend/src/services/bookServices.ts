import axiosInstance from "../axios.config";
import { BookInterface } from "../interfaces/booksInterfaces";

export const getBooks = async () => {
  try {
    const response = await axiosInstance.get("/books");
    return response.data;
    console.log(response);
  } catch (error) {
    console.log("Don't received books", error);
    throw error;
  }
};

export const getBooksById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/books/${id}`);
    return response.data;
    console.log(response);
  } catch (error) {
    console.log("Don't received books id", error);
    throw error;
  }
};

export const createBook = async (booksData: BookInterface) => {
  try {
    const response = await axiosInstance.post("/books", booksData);
    return response.data;
    console.log(response);
  } catch (error) {
    console.log("Book don't created", error);
    throw error;
  }
};
export const updateBook = async(id: string, booksData: BookInterface) => {
    try {
        const response = await 
    } catch (error) {
        
    }
}
