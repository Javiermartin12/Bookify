import React, { useEffect, useState } from "react";
import { Link, useParams } from "wouter";
import { getBooksById } from "../services/bookServices";
import { BookInterface } from "../interfaces/booksInterfaces";
import { Alert, Box, Button, CardMedia, Typography } from "@mui/material";
import {
  buttonContainer,
  containerBook,
  image,
  mainCpontainer,
} from "../theme/materialUI/bookDetails";

export const BooksDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<BookInterface | null>(null);
  const [, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBooksById(id);
        setBook(response);
      } catch (err) {
        setError("Failed to fetch book details.");
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (error) return <Alert>{error}</Alert>;

  return (
    <Box sx={mainCpontainer}>
      {book ? (
        <Box sx={containerBook}>
          <CardMedia
            component="img"
            sx={image}
            image={book.coverImageUrl}
            alt={book.title}
          />
          <Typography variant="h4" gutterBottom color="aliceblue">
            {book.title}
          </Typography>
          <Typography variant="h5" color="aliceblue" gutterBottom>
            {book.author}
          </Typography>
          <Typography variant="h6" color="aliceblue">
            PD: {new Date(book.publishedDate).toLocaleDateString()}
          </Typography>
          <Typography variant="h6" color="aliceblue">
            Genre: {book.genre.join(", ")}
          </Typography>
          <Typography color="aliceblue" variant="h6">
            Published by: {book.nameUser}
          </Typography>
          <Typography variant="h6" paragraph color="aliceblue">
            {book.synopsis}
          </Typography>
          <Box sx={buttonContainer}>
            <Link href="/home">
              <Button
                type="button"
                variant="contained"
                color="secondary"
                fullWidth
              >
                Back
              </Button>
            </Link>
            <Link href="">
              <Button
                type="button"
                variant="contained"
                color="primary"
                fullWidth
              >
                Update
              </Button>
            </Link>
          </Box>
        </Box>
      ) : (
        <Alert severity="warning">No book found.</Alert>
      )}
    </Box>
  );
};
