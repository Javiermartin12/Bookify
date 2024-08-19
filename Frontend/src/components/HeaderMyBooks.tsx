import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { headerMyBook, title } from "../theme/materialUI/headerMyBooks";
import { useAuth0 } from "@auth0/auth0-react";
import { BookInterface } from "../interfaces/booksInterfaces";
import { getBookByUser } from "../services/bookServices";

export const HeaderMyBooks: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();
  const [books, setBooks] = useState<BookInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserBooks = async () => {
      try {
        if (isAuthenticated && user) {
          const userBooks = await getBookByUser(user.name || "");
          setBooks(userBooks);
        }
      } catch (error) {
        setError("Failed to fetch books. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchUserBooks();
  }, [user, isAuthenticated]);
  if (loading) return <CircularProgress />;
  if (error) return <div>{error}</div>;
  return (
    <>
      <Box sx={headerMyBook}>
        <Typography sx={title} variant="h4">
          My books created
        </Typography>
      </Box>
      <Box>
        {books.length > 0 ? (
          books.map((book) => (
            <Card key={book._id}>
              <CardMedia
                component="img"
                height="210"
                image={book.coverImageUrl}
                alt={book.title}
              />
              <CardContent>
                <Typography variant="h6">{book.title}</Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography>No books found.</Typography>
        )}
      </Box>
    </>
  );
};
