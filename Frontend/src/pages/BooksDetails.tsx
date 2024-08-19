import React, { useEffect, useState } from "react";
import { Link, useParams } from "wouter";
import { getBooksById } from "../services/bookServices";
import { BookInterface } from "../interfaces/booksInterfaces";
import {
  Alert,
  Box,
  Button,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import {
  containerBook,
  image,
  mainCpontainer,
} from "../theme/materialUI/bookDetails";

export const BooksDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<BookInterface | null>(null);
  const [loading, setLoading] = useState(true);
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

  if (loading) return <CircularProgress />;
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
          <Typography variant="h2" gutterBottom>
            {book.title}
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            {book.author}
          </Typography>
          <Typography>
            Published Date: {new Date(book.publishedDate).toLocaleDateString()}
          </Typography>
          <Typography>Published by: {book.nameUser}</Typography>
          <Typography variant="body1" paragraph>
            {book.synopsis}
          </Typography>
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
            <Button type="button" variant="contained" color="primary" fullWidth>
              Update
            </Button>
          </Link>
        </Box>
      ) : (
        <Alert severity="warning">No book found.</Alert>
      )}
    </Box>
  );
};
