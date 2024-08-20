import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  boxContainerBooks,
  card,
  renderBooks,
} from "../theme/materialUI/containerBooks.ts";
import { BookInterface } from "../interfaces/booksInterfaces.ts";
import { getBooks, searchBooks } from "../services/bookServices.ts";
import { useLocation } from "wouter";
import SearchBar from "./SearchBar.tsx";

export const ContainerBooks: React.FC = () => {
  const [books, setBooks] = useState<BookInterface[]>([]);
  const [, setFilteredBooks] = useState<BookInterface[]>([]);
  const [, setLoading] = useState<boolean>(true);

  const [, setLocation] = useLocation();

  const handleCardClick = (id: string) => {
    setLocation(`/book-details/${id}`);
  };

  const fetchBooks = async (query: string) => {
    setLoading(true);
    try {
      if (query.trim() === "") {
        const response = await getBooks();
        setBooks(response);
        setFilteredBooks(response);
      } else {
        const response = await searchBooks(query);
        setBooks(response);
        setFilteredBooks(response);
      }
    } catch (error) {
      console.log("Failed to fetch books. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query: string) => {
    if (query.trim().length === 0) {
      await fetchBooks("");
    }
    try {
      const response = await searchBooks(query.trim());
      setBooks(response);
    } catch (error) {
      console.log("Failed to search books. Please try again.");
    }
  };
  useEffect(() => {
    fetchBooks("");
  }, []);

  return (
    <>
      <Box sx={boxContainerBooks}>
        <Box>
          <SearchBar onSearch={handleSearch} />
        </Box>
        <Box sx={renderBooks}>
          {books.length === 0 ? (
            <Typography>No books found</Typography>
          ) : (
            books.map((book) => (
              <Card
                key={book._id}
                sx={card}
                onClick={() => handleCardClick(book._id!)}
                style={{ cursor: "pointer" }}
              >
                <CardContent>
                  <CardMedia
                    component="img"
                    height="210"
                    sx={{ objectFit: "cover" }}
                    image={book.coverImageUrl}
                    alt={book.title}
                  />
                  <Typography variant="h6" component="div">
                    {book.title}
                  </Typography>
                </CardContent>
              </Card>
            ))
          )}
        </Box>
      </Box>
    </>
  );
};
