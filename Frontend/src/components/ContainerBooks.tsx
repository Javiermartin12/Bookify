import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { boxContainerBooks, card } from "../theme/materialUI/containerBooks.ts";
import { BookInterface } from "../interfaces/booksInterfaces.ts";
import { getBooks } from "../services/bookServices.ts";

export const ContainerBooks: React.FC = () => {
  const [books, setBooks] = useState<BookInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks();
        setBooks(response);
      } catch (error) {
        setError("Failed to fetch books. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Box sx={boxContainerBooks}>
        {books.map((book) => (
          <Card key={book._id} sx={card}>
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
        ))}
      </Box>
    </>
  );
};
